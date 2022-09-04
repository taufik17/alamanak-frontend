import React from "react";
import { Container, Form } from "react-bootstrap";
import FormAddRecipe from "../components/molecules/formAddRecipe";
import MenuNav from "../components/molecules/menuNav";
import Footer from "../components/organisms/FooterSection";

function AddRecipe() {
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
