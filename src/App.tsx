import React from "react";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-animated text-white">
      <main className="relative z-10 flex flex-col items-center px-4 py-10 md:py-12">
        <div className="w-full max-w-6xl space-y-12">
          <Header />
          <Technologies />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;
