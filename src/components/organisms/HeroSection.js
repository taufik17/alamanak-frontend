import React from "react";
import "./Hero.css";
import { Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import MenuNav from "../molecules/menuNav";

function HeroSection() {
  return (
    <>
      <MenuNav />
      <Row>
        <Col lg={8} className="bg-left">
          <div className="container">
            <div className="col-lg-8 col-sm-12 left-content-hero mx-15">
              <h1 className="hero-title">Discover Recipe & Delicious Food</h1>
              <Form.Control type="text" size="lg" placeholder="Search Recipe" />
            </div>
          </div>
          <img
            src={require("../../image/bayam.png")}
            alt="profile"
            className="photo-bayam"
          />
          <img
            src={require("../../image/landing_image.png")}
            alt="profile"
            className="photo-landing"
          />

          <img
            src={require("../../image/Vector.png")}
            alt="vektor1"
            className="vektor1"
          />

          <img
            src={require("../../image/Vector2.png")}
            alt="vektor2"
            className="vektor2"
          />
        </Col>
        <Col lg={4} className="bg-right"></Col>
      </Row>
      <Row className="bg-pink pb-5">
        <div className="container">
          <div className="col-sm-12 border-left">
            <h4 className="title-card">New Recipe</h4>
          </div>
          <div className="row content-recipe">
            <div className="col-lg-3 bg-orange">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <img
                    src={require("../../image/newRecipe.png")}
                    alt="vektor1"
                    className="new-recipe"
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  {/* Mobile version */}
                  <div className="col tagline-recipe-mobile">
                    <h4 className="title-card">
                      Healthy Bone Broth Ramen (Quick & Easy)
                    </h4>
                    <hr />
                    <p>
                      Quick + Easy Chicken Bone Broth Ramen- Healthy chicken
                      ramen in a hurry? That’s right!
                    </p>
                    <Button variant="warning">Learn More</Button>
                  </div>
                  {/* end mobile version */}
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12"></div>
            <div className="col-md-3 col-sm-12 tagline-recipe">
              <h4 className="title-card">
                Healthy Bone Broth Ramen (Quick & Easy)
              </h4>
              <hr />
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <Button variant="warning">Learn More</Button>
            </div>
          </div>
        </div>
      </Row>

      <Row className="bg-pink pt-5">
        <div className="container">
          <div className="col-sm-12 border-left">
            <h4 className="title-card">Popular Recipe</h4>
          </div>
          <div className="list-popular">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <img
                  src={require("../../image/newRecipe.png")}
                  alt="vektor1"
                  className="list-popular-recipe"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <img
                  src={require("../../image/newRecipe.png")}
                  alt="vektor1"
                  className="list-popular-recipe"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <img
                  src={require("../../image/newRecipe.png")}
                  alt="vektor1"
                  className="list-popular-recipe"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <img
                  src={require("../../image/newRecipe.png")}
                  alt="vektor1"
                  className="list-popular-recipe"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <img
                  src={require("../../image/newRecipe.png")}
                  alt="vektor1"
                  className="list-popular-recipe"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <img
                  src={require("../../image/newRecipe.png")}
                  alt="vektor1"
                  className="list-popular-recipe"
                />
              </div>
            </div>
          </div>
        </div>
      </Row>

      <Row className="bg-orange pt-5">
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
      </Row>
    </>
  );
}

export default HeroSection;
