import React from "react";

import InfoPageHero from "../../components/InfoPageHero";
import InfoPageBody from "../../components/InfoPageMainBody";
import InfoLinks from "../../components/InfoLinks";
export default function Home() {
  return (
    <main>
      <InfoPageHero />
      <InfoPageBody />
      <InfoLinks />
    </main>
  );
}
