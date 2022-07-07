import React from "react";
import { Container, Row } from "react-bootstrap";
import "./App.css";
import LeftLogin from "./components/organisms/LeftLogin";
import RightLogin from "./components/organisms/RightLogin";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="form-login ">
          <LeftLogin />
          <RightLogin />
        </Row>
      </Container>
    </div>
  );
}

export default App;
