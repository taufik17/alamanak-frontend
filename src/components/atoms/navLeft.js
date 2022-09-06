import React from "react";
import { Nav } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

const NavLeft = () => {
  const location = useLocation();
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
            <Link exact to="/">
              <Nav className={location.pathname === "/" ? "text-dark navbar-nav" : "navbar-nav"} > Home</Nav>
            </Link>
            <Link exact to="/addRecipe">
              <Nav className={location.pathname == "/addRecipe" ? "text-dark navbar-nav" : "navbar-nav"}>Add Recipe</Nav>
            </Link>
            <Link exact to="/profile">
              <Nav className={location.pathname === "/profile" ? "text-dark navbar-nav" : "navbar-nav"} >Profile</Nav>
            </Link>
          </>
        ) : (
          <>
            <Link exact to="/">
              <Nav className="text-dark">Home</Nav>
            </Link>
          </>
        )}
      </Nav>
    </>
  );
};

export default NavLeft;
