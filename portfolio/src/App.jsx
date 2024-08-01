import Navbar from "./nav/Navbar";
import Mountains from "./components/background/Mountains";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Router from "./router/Router";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Mountains />
      <Portfolio />
      <About />
      <Contact />
      <Router />
    </>
  );
}

export default App;