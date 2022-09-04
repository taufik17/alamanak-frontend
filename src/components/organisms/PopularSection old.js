import axios from "axios";
import React from "react";
import "./LandingPage.css";
import { Row, Card } from "react-bootstrap";
import CardPopularRecipe from "../molecules/CardPopularRecipe";

function PopularSection() {
  const [listRecipe, setListRecipe] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);
  React.useEffect(() => {
    axios.get("https://alamanak.herokuapp.com/recipe").then((res) => {
      setListRecipe(res.data.data);
      setisLoading(false);
    });
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
              {isLoading ? (
                <>
                  <div className="col-lg-4 col-md-4 col-sm-6 p-4">
                    <Card>
                      <div className="animated-background" />
                    </Card>
                  </div>
                </>
              ) : (
                <>
                  {listRecipe.map((item) => (
                    <CardPopularRecipe
                      image={item?.recipe_image}
                      title={item?.recipe_name}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>

        <h2>TEsting</h2>
      </Row>
    </>
  );
}

export default PopularSection;
