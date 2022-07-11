import { React } from "react";
import { Nav } from "react-bootstrap";

const navLeft = () => {
  return (
    <>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        <Nav.Link href="/" className="text-dark">
          Home
        </Nav.Link>
        {/* menu ini ada jika sudah login */}
        {/* <Nav.Link href="#action2">Add Recipe</Nav.Link>
            <Nav.Link href="#action2">Profile</Nav.Link> */}
      </Nav>
    </>
  );
};

export default navLeft;
