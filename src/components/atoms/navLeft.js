import React from "react";
import { Nav } from "react-bootstrap";

const NavLeft = () => {
  const [isLogin, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("token_almnk")) {
      setIsLogin(true);
    }
  }, []);
  return (
    <>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        {isLogin ? (
          <>
            <Nav.Link href="/" className="text-dark">
              Home
            </Nav.Link>
            <Nav.Link href="#action2">Add Recipe</Nav.Link>
            <Nav.Link href="#action2">Profile</Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link href="/" className="text-dark">
              Home
            </Nav.Link>
          </>
        )}
      </Nav>
    </>
  );
};

export default NavLeft;
