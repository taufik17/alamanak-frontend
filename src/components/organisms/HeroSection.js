/* eslint-disable no-undef */
import React, { useState } from "react";
import {
    // useParams,
    useNavigate,
    // useLocation,
} from "react-router-dom";
import "./LandingPage.css";
import { Row, Col, Form } from "react-bootstrap";

function HeroSection() {
    let navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    const handleSearch = () => {
        navigate(`/search/${keyword}`);
    };
    return (
        <>
            <Row>
                <Col lg={8} className="bg-left">
                    <div className="container">
                        <div className="col-lg-8 col-sm-12 left-content-hero mx-15">
                            <h1 className="hero-title">
                                Discover Recipe & Delicious Food
                            </h1>
                            <Form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSearch();
                                }}
                            >
                                <Form.Control
                                    type="text"
                                    size="lg"
                                    required
                                    placeholder="Search Recipe"
                                    onChange={(e) => setKeyword(e.target.value)}
                                />
                            </Form>
                        </div>
                    </div>
                    <img
                        src={require("../../image/bayam.png")}
                        alt="profile"
                        className="photo-bayam"
                    />
                    <img
                        src={require("../../image/landing_image.png")}
                        alt="profile"
                        className="photo-landing"
                    />

                    <img
                        src={require("../../image/Vector.png")}
                        alt="vektor1"
                        className="vektor1"
                    />

                    <img
                        src={require("../../image/Vector2.png")}
                        alt="vektor2"
                        className="vektor2"
                    />
                </Col>
                <Col lg={4} className="bg-right"></Col>
            </Row>
        </>
    );
}

export default HeroSection;
