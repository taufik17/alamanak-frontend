import React from "react";
import { Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import "../App.css";
import LeftLogin from "../components/organisms/LeftLogin";
import RightRegister from "../components/organisms/RightRegister";

function App() {

  React.useEffect(() => {
    if (localStorage.getItem("token_almnk")) {
      Navigate("/");
    }
  }, []);

  return (
    <div className="App">
      <Container fluid>
        <Row className="form-login ">
          <LeftLogin />
          <RightRegister />
        </Row>
      </Container>
    </div>
  );
}

export default App;
