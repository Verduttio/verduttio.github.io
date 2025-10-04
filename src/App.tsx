import React from "react";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import AboutMe from "./components/AboutMe";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import ScrollNav from "./components/ScrollNav";


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-animated text-white">
      <main className="relative z-10 flex flex-col items-center px-4 py-10 md:py-12">
        <div className="w-full max-w-6xl space-y-12">
          <div className="w-full max-w-6xl space-y-12">
            <ScrollNav />
            <Header />
            <Divider />
            <AboutMe />
            <Divider />
            <Technologies />
            <Certifications />
            <Projects />
            <Divider />
            <Contact />
            <Footer />  
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
