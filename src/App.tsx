import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./routes/index";
import About from "./routes/about";
import Classes from "./routes/classes";
import Contact from "./routes/contact";
import FabricPainting from "./routes/fabric-painting";
import Gallery from "./routes/gallery";
import Paintings from "./routes/paintings";
// import AdminReviews from "./routes/admin-reviews";
import { ToastHost } from "./components/ToastHost";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fabric-painting" element={<FabricPainting />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/paintings" element={<Paintings />} />
        {/* <Route path="/admin/reviews" element={<AdminReviews />} /> */}
        <Route path="*" element={<HomePage />} />
      </Routes>
      <ToastHost />
    </BrowserRouter>
  );
}
