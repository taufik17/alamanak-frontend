import React from "react";
import "./LandingPage.css";
import { Row, Button } from "react-bootstrap";

function NewRecipeSection() {
  return (
    <>
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
                    <Button variant="warning" className="text-white">
                      Learn More
                    </Button>
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
              <Button variant="warning" className="text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Row>
    </>
  );
}

export default NewRecipeSection;
