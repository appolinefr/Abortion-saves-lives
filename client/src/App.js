import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";
function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Info />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}
export default App;
