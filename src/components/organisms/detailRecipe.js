import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";
import "../molecules/popular.css";
import { Container } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import parse from "html-react-parser";

function DetailRecipe() {
    let { id } = useParams();
    const [recipe, setRecipe] = React.useState([]);
    React.useEffect(() => {
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
                    </>
                ) : (
                    <>
                        {recipe.map((item) => (
                            <>
                                <div className="text-center py-2 px-5">
                                    <h2 className="py-3">
                                        {item?.recipe_name}
                                    </h2>
                                    <Card className="radius">
                                        <Card.Img
                                            className="img-detail"
                                            src={item?.recipe_image}
                                            alt={item?.recipe_name}
                                        />
                                        <Card.ImgOverlay>
                                            <Card.Title className="save-like-detail">
                                                <div>{item?.recipe_name}</div>
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>

                                <div className="py-2">
                                    {parse(item?.ingredients)}
                                </div>
                                
                                <div className="py-2">
                                    <h4>Video Step</h4>
                                </div>
                            </>
                        ))}
                    </>
                )}
            </Container>
        </>
    );
}

export default DetailRecipe;
