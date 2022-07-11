import axios from "axios";
import React from "react";
import "./LandingPage.css";
import { Row } from "react-bootstrap";
import CardPopularRecipe from "../molecules/CardPopularRecipe";

function PopularSection() {
  const [listRecipe, setListRecipe] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:8000/recipe")
      .then((res) => setListRecipe(res.data.data));
  }, []);

  return (
    <>
      <Row className="bg-pink pt-5">
        <div className="container pb-5">
          <div className="col-sm-12 border-left">
            <h4 className="title-card">Popular Recipe</h4>
          </div>
          <div className="list-popular">
            <div className="row">
              {listRecipe.map((item) => (
                <CardPopularRecipe
                  image={item?.recipe_image}
                  title={item?.recipe_name}
                />
              ))}
            </div>
          </div>
        </div>
      </Row>
    </>
  );
}

export default PopularSection;
