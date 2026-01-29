import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import Projects from "./components/Projects";
import HeavyMachineLiftingAndShifting from "./components/Services/HeavyMachineLiftingAndShifting";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route
            path="services/heavy-machine-lifting-and-shifting"
            element={<HeavyMachineLiftingAndShifting />}
          />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
