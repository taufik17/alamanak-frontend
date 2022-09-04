import React from "react";
import "../molecules/popular.css";
import { Card } from "react-bootstrap";

function CardPopularRecipe(props) {
  const { image, title } = props;
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-6 p-4">
        <Card className="radius">
          <Card.Img className="img-popular" src={image} alt={title} />
          <Card.ImgOverlay className="bg-overlay">
            <Card.Title className="pt-text">{title}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}

export default CardPopularRecipe;
