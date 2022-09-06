import axios from "axios";
import React from "react";
import "./LandingPage.css";
import { Row, Card } from "react-bootstrap";
import CardPopularRecipe from "../molecules/CardPopularRecipe";

function PopularSection() {
  const [listRecipe, setListRecipe] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);
  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/recipe`).then((res) => {
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
                <CardPopularRecipe data={listRecipe} />
                </>
              )}
            </div>
          </div>
        </div>
      </Row>
    </>
  );
}

export default PopularSection;
