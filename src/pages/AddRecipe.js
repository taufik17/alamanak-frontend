import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import FormAddRecipe from "../components/molecules/formAddRecipe";
import MenuNav from "../components/molecules/menuNav";
import Footer from "../components/organisms/FooterSection";

function AddRecipe() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E5E5E5";
    return () => {
      document.body.style.backgroundColor = "unset";
    };
  });
  return (
    <>
      <Container fluid>
        <MenuNav />
        <FormAddRecipe />
        <Footer />
      </Container>
    </>
  );
}

export default AddRecipe;
