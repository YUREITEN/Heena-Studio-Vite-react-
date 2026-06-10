import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(5).max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      service: data.service || null,
      message: data.message,
    });
    if (error) {
      console.error("contact insert failed", error);
      throw new Error("Could not save your message. Please try again.");
    }

    // Optional Resend integration — only fires if keys are configured.
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.ARTIST_EMAIL;
    if (apiKey && to) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "heena <onboarding@resend.dev>",
            to: [to],
            subject: `New enquiry from ${data.name}`,
            html: `<h2>New contact form submission</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone || "—"}</p>
              <p><strong>Service:</strong> ${data.service || "—"}</p>
              <p><strong>Message:</strong><br/>${data.message.replace(/\n/g, "<br/>")}</p>`,
          }),
        });
      } catch (e) {
        console.warn("Resend send failed (non-fatal):", e);
      }
    }

    return { ok: true };
  });
