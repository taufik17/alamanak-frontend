/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavRight = () => {
  const { auth } = useSelector((state) => state);  
  const [isLogin, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("token_almnk")) {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      <div className="d-flex">
        {isLogin ? (
          <>
            <Link exact to="/profile">
              <Nav>
                <img
                  src={auth?.profile?.user_image}
                  alt="profile"
                  className="photo-profile-login"
                />
              </Nav>
            </Link>
            <Nav>
              <Button
                variant="danger"
                type="submit"
                onClick={() => {
                  // dispatch({ type: Type.REMOVE_AUTH });
                  localStorage.removeItem("token_almnk");
                  localStorage.removeItem("persist:root");
                  window.location.href = "/";
                }}
              >
                Logout
              </Button>
            </Nav>
          </>
        ) : (
          <>
            <Link exact to="/register">
              <Nav>
                <Button variant="success">Register</Button>
              </Nav>
            </Link>
            <Link exact to="/login">
              <Nav>
                <Button variant="warning" className="text-white ml-4">
                  Login
                </Button>
              </Nav>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default NavRight;
