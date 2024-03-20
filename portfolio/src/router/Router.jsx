import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mountains from "../components/background/Mountains";
import Navbar from "../nav/Navbar";
import Hej from "../components/background/Hej";

export default function Router() {
    return (
        <BrowserRouter> 
            <Navbar />
            <Mountains />
            {/* <Hej /> */}
                <Routes>    
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
        </BrowserRouter>
    );
}

function Home() {
    return <h1>Forside</h1>;
}

function Portfolio() {
    return <h1>Portfolio</h1>;
}

function About() {
    return <h1>About Page</h1>;
}

function Contact() {
    return <h1>Contact Page</h1>;
}