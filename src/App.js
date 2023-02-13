import "./App.css";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Resume from "./components/resume";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
