import React from "react";
import { Container } from "react-bootstrap";
import MenuNav from "../components/molecules/menuNav";
import ContentDetail from "../components/organisms/detailRecipe";
import Footer from "../components/organisms/FooterSection";

function DetailRecipe() {
  return (
    <>
      <Container fluid>
        <MenuNav />
        
        <div className="pt-5">
          <div className="pt-5">
            <ContentDetail />
          </div>
        </div>
        <Footer />
      </Container>
    </>
  );
}

export default DetailRecipe;
