/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Type from "../../redux/auth/type";

const NavRight = () => {
  const dispatch = useDispatch;
  const [isLogin, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("token_almnk")) {
      setIsLogin(true);
    }
  }, []);

  const logout = () => {};

  return (
    <>
      <div className="d-flex">
        {isLogin ? (
          <>
            <Link exact to="/profile">
              <Nav>
                <img
                  src="https://translationmonster.com/wp-content/uploads/2017/08/Female_dummy_image.jpg"
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
