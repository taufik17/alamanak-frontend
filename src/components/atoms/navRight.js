import React from "react";
import { Button, Nav } from "react-bootstrap";

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
            <Nav.Link href="/profile">
              <img
                src="https://translationmonster.com/wp-content/uploads/2017/08/Female_dummy_image.jpg"
                alt="profile"
                className="photo-profile-login"
              />
            </Nav.Link>
            <Nav.Link>
              <Button variant="danger" type="submit" onClick={logout}>
                Logout
              </Button>
            </Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link href="/register">
              <Button variant="success">Register</Button>
            </Nav.Link>
            <Nav.Link href="/login">
              <Button variant="warning" className="text-white ml-4">
                Login
              </Button>
            </Nav.Link>
          </>
        )}
      </div>
    </>
  );
};

export default NavRight;
