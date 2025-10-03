import React from "react";

const AboutMe: React.FC = () => (
  <section id="about" className="px-4">
    <div className="mx-auto w-full max-w-3xl">
      <div className="text-center">
        <h2 className="text-xl font-semibold">About me</h2>
        <p className="mx-auto mt-2 max-w-3xl text-gray-200/90">
          Jestem doświadczonym Java i backend developerem, specjalizującym się w tworzeniu
          zaawansowanych aplikacji webowych. Ukończyłem Uniwersytet Jagielloński i pracowałem
          nad projektami od mikroserwisów po rozbudowane systemy zarządzania zasobami.
        </p>
      </div>
    </div>
  </section>
);

export default AboutMe;
