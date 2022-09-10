/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";
import "../molecules/popular.css";
import { Container, FloatingLabel, Form, Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import parse from "html-react-parser";
import { BsPlay } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import Like from "../atoms/like";
import Saved from "../atoms/saved";
import { useSelector, useDispatch } from "react-redux";
import Video from "../molecules/video";

function DetailRecipe() {
  let { id } = useParams();
  const [recipe, setRecipe] = React.useState([]);
  const [video, setVideo] = React.useState([]);

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  
  React.useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'auto'});
    axios
      // eslint-disable-next-line no-undef
      .post(`${process.env.REACT_APP_BASE_URL}/recipe/find/id`, {
        idRecipe: id,
      })
      .then((res) => setRecipe(res?.data?.data));
  }, []);
  
  return (
    <>
      <Container>
        {recipe.length == 0 ? (
          <>
            <div className="text-center py-2">
              <h3 className="py-3">
                <Skeleton width={170} />
              </h3>
              <Skeleton height={350} />
            </div>
            <div className="py-2">
              <Skeleton width={270} count={3} />
            </div>
          </>
        ) : (
          <>
            {recipe.map((item) => (
              <>
                <div className="text-center py-2">
                  <h2 className="py-3">{item?.recipe_name}</h2>
                  <Card className="radius">
                    <Card.Img
                      className="img-detail"
                      src={item?.recipe_image}
                      alt={item?.recipe_name}
                    />
                    <Card.ImgOverlay>
                      <Card.Title className="save-like-detail">
                        {auth?.token == null ? (
                          <></>
                        ) : (
                          <>
                            <span>
                              <Saved
                                key={item?.id_recipe}
                                id_recipe={item?.id_recipe}
                                recipeName={item?.recipe_name}
                              />
                              <Like
                                key={item?.id_recipe}
                                id_recipe={item?.id_recipe}
                                recipeName={item?.recipe_name}
                              />
                            </span>
                          </>
                        )}
                      </Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </div>

                <div className="py-2">{parse(item?.ingredients)}</div>
              </>
            ))}
          </>
        )}
        <div className="py-2">
          <h4>Video Step</h4>
          <Link to="/video">
            <button className="btn btn-lg btn-warning px-5">
              <BsPlay className="text-white" />
            </button>
          </Link>
          <Link to="/video">
            <button className="btn btn-lg btn-warning px-5">
              <BsPlay className="text-white" />
            </button>
          </Link>
        </div>

        <div className="pt-5 text-center">
          <FloatingLabel controlId="floatingTextarea2" label="Comment">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{
                height: "200px",
                backgroundColor: "whitesmoke",
              }}
            />
          </FloatingLabel>

          <Link to="/video">
            <button className="btn btn-lg btn-warning my-4 px-5 text-white">
              Send <FiSend className="" />
            </button>
          </Link>
        </div>

        <div className="pt-4 pb-5 mb-5">
          <h4>Comment</h4>
          <Row>
            <Col md={8}>
              <div className="row">
                <div className="col-1">
                  <Card.Img
                    className="img-user"
                    src="https://translationmonster.com/wp-content/uploads/2017/08/Female_dummy_image.jpg"
                    alt="user"
                  />
                </div>
                <div className="col-11">
                  Lorem impusm dolor ist amat Lorem impusm dolor ist amat Lorem
                  impusm dolor ist amat Lorem impusm dolor ist amat Lorem impusm
                  dolor ist amat Lorem impusm dolor ist amat
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default DetailRecipe;
