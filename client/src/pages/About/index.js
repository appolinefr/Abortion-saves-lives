import React from "react";

import AboutAuthor from "../../components/AboutAuthor";
import AboutSite from "../../components/AboutSite";
import AboutHero from "../../components/AboutHero";

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutSite />
      <AboutAuthor />
    </main>
  );
}
