/* eslint-disable react/prop-types */
import React from "react";
import "../organisms/LandingPage.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NewRecipeContent(props) {
    const { image, id_recipe, title } = props;
    return (
        <div className="row content-recipe">
            <div className="col-lg-3 bg-orange">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img
                            src={image}
                            alt="New Recipe"
                            className="new-recipe"
                        />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        {/* Mobile version */}
                        <div className="col tagline-recipe-mobile">
                            <h4 className="title-card">Ayo Berkreasi</h4>
                            <hr />
                            <p>Semua bisa memasak, lihat ikuti nikmati.</p>
                            <p>Coba Resep Pertamamu <b>{title}</b></p>
                            <Link to={`/detailrecipe/${id_recipe}`}>
                                <Button
                                    variant="warning"
                                    className="text-white"
                                >
                                    Detail
                                </Button>
                            </Link>
                        </div>
                        {/* end mobile version */}
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12"> </div>
            <div className="col-md-3 col-sm-12 tagline-recipe">
                <h4 className="title-card">Ayo Berkreasi</h4>
                <hr />
                <p>Semua bisa memasak, lihat ikuti nikmati.</p>
                <p>Coba Resep Pertamamu <b>{title}</b></p>
                <Link to={`/detailrecipe/${id_recipe}`}>
                    <Button variant="warning" className="text-white">
                        Detail
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default NewRecipeContent;
