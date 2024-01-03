import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
// import Home from "./components/Home";
import HomeContainer from "./components/home/HomeContainer";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
