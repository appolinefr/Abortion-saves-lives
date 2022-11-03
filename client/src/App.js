import React from "react";
import NavBar from "./components/NavBar";
import MainPageHero from "./components/MainPageHero";
import Footer from "./components/Footer";
import MainBodyPage from "./components/MainPageBody";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <MainPageHero />
      <MainBodyPage />
      <Footer />
    </ChakraProvider>
  );
}
export default App;
