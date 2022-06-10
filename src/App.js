import Navbar from "./Components/Navbar";
import "./App.css";
import HeroSection from "./Components/HeroSection";
import Timeline from "./Components/VerticalTimeline";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <main id="home">
        <Navbar />
        <section id="home">
          <HeroSection />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
      </main>
    </>
  );
}

export default App;
