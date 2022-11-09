import React from "react";

import InfoPageHero from "../../components/InfoPageComponents/InfoPageHero";
import InfoPageBody from "../../components/InfoPageComponents/InfoPageMainBody";
import InfoLinks from "../../components/InfoPageComponents/InfoLinks";
export default function Home() {
  return (
    <main>
      <InfoPageHero />
      <InfoPageBody />
      <InfoLinks />
    </main>
  );
}
