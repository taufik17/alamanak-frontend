/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";
import CardPopularRecipe from "../molecules/CardPopularRecipe";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SearchResult(props) {
  const { keyword } = props;
  const [listRecipe, setListRecipe] = React.useState([]);
  const [loadRecipe, setLoadRecipe] = React.useState(true);
  const [dataFound, setDataFound] = React.useState(0);
  React.useEffect(() => {
    setListRecipe([]);
    setDataFound(0);
    setLoadRecipe(true);
    axios
      // eslint-disable-next-line no-undef
      .post(`${process.env.REACT_APP_BASE_URL}/recipe/searchRecipe`, {
        keyword: keyword,
      })
      .then((res) => {
        setListRecipe(res?.data?.data);
        setDataFound(res?.data?.jumlahData);
        setLoadRecipe(false);
      });
  }, [keyword]);

  return (
    <>
      <div className="mb-4">
        {loadRecipe ? (
          <>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 p-4">
                <Skeleton width={270} height={340} />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 p-4">
                <Skeleton width={270} height={340} />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 p-4">
                <Skeleton width={270} height={340} />
              </div>
            </div>
          </>
        ) : (
          <>
            {listRecipe.length == 0 ? (
              <>
                <h6 className="pt-4 mx-2">Keyword: {keyword}, Result: {dataFound} Data</h6>
                <div className="text-center py-3">
                  <h6>Not Found</h6>
                </div>
              </>
            ) : (
              <>
                <h6 className="pt-4 mx-3">Keyword: {keyword}, Result: {dataFound} Data</h6>
                <CardPopularRecipe data={listRecipe} />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default SearchResult;
