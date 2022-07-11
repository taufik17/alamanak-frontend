import React from "react";
import "../organisms/LandingPage.css";
import { Button } from "react-bootstrap";

function NewRecipeContent(props) {
    const { image, title } = props;
  return (
    <div className="row content-recipe">
      <div className="col-lg-3 bg-orange">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img
              src={image}
              alt="New Recipe"
              className="new-recipe"
            />
          </div>
          <div className="col-md-6 col-sm-12">
            
            {/* Mobile version */}
            <div className="col tagline-recipe-mobile">
              <h4 className="title-card">
                {title}
              </h4>
              <hr />
              <p>
                Quick + Easy Chicken Bone Broth Ramen - Healthy chicken ramen in
                a hurry ? That’ s right!
              </p>
              <Button variant="warning" className="text-white">
                Learn More
              </Button>
            </div>
            {/* end mobile version */}
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-12"> </div>
      <div className="col-md-3 col-sm-12 tagline-recipe">
        <h4 className="title-card">{title} </h4>
        <hr />
        <p>
          Quick + Easy Chicken Bone Broth Ramen - Healthy chicken ramen in a
          hurry ? That’ s right!
        </p>
        <Button variant="warning" className="text-white">
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default NewRecipeContent;
