import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../nav/Navbar";
import Portfolio from "../components/portfolio/Portfolio";
import About from "../components/about/About";
import Mountains from "../components/background/Mountains";
import Contact from "../components/contact/Contact";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mountains />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}