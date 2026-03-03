import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../nav/Navbar";
import Home from "../components/homepage/Home";


export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}