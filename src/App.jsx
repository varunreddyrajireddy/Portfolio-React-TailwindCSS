import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="min-w-[320px]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
};

export default App;
