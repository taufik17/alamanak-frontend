import React from "react";
import "../organisms/LandingPage.css";
import { Card } from "react-bootstrap";

function CardPopularRecipe(props) {
  const { image, title } = props;
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-6 p-4">
        <Card>
          <Card.Img src={image} alt={title} className="image-popular" />
          <Card.ImgOverlay>
            <Card.Title className="pt-80">{title}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}

export default CardPopularRecipe;
