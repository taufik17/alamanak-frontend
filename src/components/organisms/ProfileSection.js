/* eslint-disable no-undef */
import React from "react";
import axios from "axios";
import "./ProfilePage.css";
import { Row, Col, Container, ListGroup, Card } from "react-bootstrap";
import CardPopularRecipe from "../molecules/CardPopularRecipe";

function ProfileSection() {
    const [listRecipe, setListRecipe] = React.useState([]);
    const [isLoading, setisLoading] = React.useState(true);
    const [foundRecipe, setFoundRecipe] = React.useState(false);

    const token = localStorage.getItem("token_almnk");

    React.useEffect(() => {
        axios
            // eslint-disable-next-line no-undef
            .get(`${process.env.REACT_APP_BASE_URL}/recipe/find/myrecipe`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setListRecipe(res?.data?.data);
                setisLoading(false);
                if (res?.data?.data?.length === 0) {
                    setFoundRecipe(false);
                } else {
                    setFoundRecipe(true);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    React.useEffect(() => {
        console.log(token);
        axios
            .post(`${process.env.REACT_APP_BASE_URL}/users/myprofile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <>
            <Container fluid className="bg-pink">
                <Row className="justify-content-sm-center profile-section">
                    <Col md="auto">
                        <img
                            src="../../image/profile/default.png"
                            alt="profile"
                            className="rounded profile-image"
                        />
                        <h4 className="text-center">Foto Profile</h4>
                    </Col>
                </Row>
                <Container>
                    <ListGroup horizontal className="list-group-profile">
                        <ListGroup.Item>My Recipe</ListGroup.Item>
                        <ListGroup.Item>Saved Recipe</ListGroup.Item>
                        <ListGroup.Item>Liked Recipe</ListGroup.Item>
                    </ListGroup>
                </Container>
                <hr />

                <Container>
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
                            {foundRecipe ? (
                                listRecipe.map((item) => (
                                    <CardPopularRecipe
                                        key={item?.id_recipe}
                                        image={item?.recipe_image}
                                        title={item?.recipe_name}
                                    />
                                ))
                            ) : (
                                <h3 className="text-center pb-5 pt-3">
                                    Not Have Recipe Yet
                                </h3>
                            )}
                        </>
                    )}
                </Container>
            </Container>
        </>
    );
}

export default ProfileSection;
