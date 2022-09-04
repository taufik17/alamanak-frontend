import React from "react";
import axios from "axios";
import "./LandingPage.css";
import ContentNewRecipe from "../molecules/NewRecipeContent";
import { Row } from "react-bootstrap";

function NewRecipeSection() {
  const [listRecipe, setListRecipe] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`https://alamanak.herokuapp.com/recipe/find/latest`)
      .then((res) => setListRecipe(res.data.data.slice(0,1)));
  }, []);
  return (
    <>
      <Row className="bg-pink pb-5">
        <div className="container">
          <div className="col-sm-12 border-left">
            <h4 className="title-card">New Recipe</h4>
          </div>
          {listRecipe.map((item) => (
                <ContentNewRecipe
                  image={item?.recipe_image}
                  title={item?.recipe_name}
                />
          ))}
        </div>
      </Row>
    </>
  );
}

export default NewRecipeSection;
