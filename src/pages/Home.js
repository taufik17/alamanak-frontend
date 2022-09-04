import React from "react";
import MenuNav from "../components/molecules/menuNav";
import HeroSection from "../components/organisms/HeroSection";
import NewRecipe from "../components/organisms/NewRecipeSection";
import PopularRecipe from "../components/organisms/PopularSection";
import Footer from "../components/organisms/FooterSection";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid>
        <MenuNav />
        <HeroSection />
        <NewRecipe />
        <PopularRecipe />
        <Footer />
      </Container>
    </>
  );
}

export default App;
