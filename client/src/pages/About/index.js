import React from "react";

import AboutAuthor from "../../components/AboutPageComponents/AboutAuthor";
import AboutSite from "../../components/AboutPageComponents/AboutSite";
import AboutHero from "../../components/AboutPageComponents/AboutHero";

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutSite />
      <AboutAuthor />
    </main>
  );
}
