import { React } from "react";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";

const navRight = () => {
  return (
    <>
      <div className="d-flex">
        <Nav.Link href="/register">
          <Button variant="success">Register</Button>{" "}
        </Nav.Link>
        <Nav.Link href="/login">
          {/* image ini ada jika suah login */}
          {/* <img
                src="https://translationmonster.com/wp-content/uploads/2017/08/Female_dummy_image.jpg"
                alt="profile"
                className="photo-profile-login"
              /> */}
          <Button variant="warning" className="text-white ml-4">
            Login
          </Button>{" "}
        </Nav.Link>
      </div>
    </>
  );
};

export default navRight;
