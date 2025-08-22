import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;