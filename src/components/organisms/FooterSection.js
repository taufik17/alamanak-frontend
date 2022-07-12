import React from "react";
import "./LandingPage.css";
import { Row, Col, ListGroup } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function FooterSection() {
  const location = useLocation();
  const [isFullFooter, setIsFullFooter] = React.useState(true);

  React.useEffect(() => {
    if (location.pathname === "/profile") {
      setIsFullFooter(false);
    }
  }, []);

  return (
    <>
      <Row className="bg-orange pt-5">
        {isFullFooter ? (
          <>
            <div className="text-footer">
              <h1>Eat, Cook, Repeat</h1>
              <p>Share your best recipe by uploading here !</p>
            </div>

            <Col lg={10}>
              <ListGroup horizontal className="list-group-footer">
                <ListGroup.Item>Product</ListGroup.Item>
                <ListGroup.Item>Company</ListGroup.Item>
                <ListGroup.Item>Learn More</ListGroup.Item>
                <ListGroup.Item>Get In touch</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg={2}>
              <p className="right-footer">PijarCamp</p>
            </Col>
          </>
        ) : (
          <>
            <Col lg={10}>
              <ListGroup horizontal className="list-group-footer">
                <ListGroup.Item>Product</ListGroup.Item>
                <ListGroup.Item>Company</ListGroup.Item>
                <ListGroup.Item>Learn More</ListGroup.Item>
                <ListGroup.Item>Get In touch</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg={2}>
              <p className="right-footer">PijarCamp</p>
            </Col>
          </>
        )}
      </Row>
    </>
  );
}

export default FooterSection;
