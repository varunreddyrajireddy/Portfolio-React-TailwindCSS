import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="min-w-[320px]">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </div>
  );
};

export default App;
