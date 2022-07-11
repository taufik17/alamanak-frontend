import axios from "axios";
import React from "react";
import HeroSection from "../components/organisms/HeroSection";
import { Container } from "react-bootstrap";
import MenuNav from "../components/molecules/menuNav";

function App() {
  return (
    <>
      <Container fluid>
        <MenuNav />
        <HeroSection />
      </Container>
    </>
  );
}

export default App;
