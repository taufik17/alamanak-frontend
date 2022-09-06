import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import SearchResult from "../components/molecules/searchResult";
import MenuNav from "../components/molecules/menuNav";
import Footer from "../components/organisms/FooterSection";

function Search() {
    let { keyword } = useParams();
    let navigate = useNavigate();
    const [key, setKeyword] = useState("");
    const handleSearch = () => {
        navigate(`/search/${key}`);
    };
    return (
        <>
            <Container fluid>
                <MenuNav />
                <div className="pt-5">
                    <div className="pt-5 mt-5 mx-5 px-5 text-center">
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
                <Container>
                    <SearchResult keyword={keyword} />
                </Container>
                <Footer />
            </Container>
        </>
    );
}

export default Search;
