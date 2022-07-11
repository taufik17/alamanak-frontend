import React from "react";
import { Container, Row } from "react-bootstrap";
import "../App.css";
import LeftLogin from "../components/organisms/LeftLogin";
import RightRegister from "../components/organisms/RightRegister";

function App() {
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
