import React from "react";
import { Nav } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

const NavLeft = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  console.log(location.pathname)

  React.useEffect(() => {
    if (localStorage.getItem("token_almnk")) {
      setIsLogin(true);
    }
  }, []);

  // React.useEffect(() => {
  //   if (location.pathname === "/profile") {
  //   }
  // }, []);

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
              <Nav className={location.pathname === "/" ? "text-dark" : <></>} > Home</Nav>
            </Link>
            <Link exact to="/">
              <Nav clascName={location.pathname === "/addRecipe" ? "text-dark" : <></>}>Add Recipe</Nav>
            </Link>
            <Link exact to="/profile">
              <Nav className={location.pathname === "/profile" ? "text-dark" : <></>} >Profile</Nav>
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
