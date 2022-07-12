import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavRight = () => {
  const [isLogin, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("token_almnk")) {
      setIsLogin(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token_almnk");
    window.location.href = "/";
  };

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
              <Button variant="danger" type="submit" onClick={logout}>
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
