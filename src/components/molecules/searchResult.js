/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";
import CardPopularRecipe from "../molecules/CardPopularRecipe";

function SearchResult(props) {
    const { keyword } = props;
    const [listRecipe, setListRecipe] = React.useState([]);
    React.useEffect(() => {
        axios
            // eslint-disable-next-line no-undef
            .post(`${process.env.REACT_APP_BASE_URL}/recipe/searchRecipe`, {
                keyword: keyword,
            })
            .then((res) => setListRecipe(res?.data?.data));
    }, [keyword]);

    return (
        <>
            <div>
                <CardPopularRecipe data={listRecipe} />
            </div>
        </>
    );
}

export default SearchResult;
