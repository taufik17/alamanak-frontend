import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LeftMenu from "../atoms/navLeft";
import RightMenu from "../atoms/navRight";

function menuNav() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <LeftMenu />
          <RightMenu />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default menuNav;
