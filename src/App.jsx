import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
// import Hireme from "./components/Hireme";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import { Contact } from "./components/contact/Contact";
import Experience from "./components/experience/experience";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Experience/>
      {/* <Hireme /> */}
       <Project /> 
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
