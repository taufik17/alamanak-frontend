/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import "../molecules/popular.css";
import { Card } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

function LikeSaveRecipe(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="row">
        {currentItems.map((item) => (
          <>
            <div className="col-lg-4 col-md-4 col-sm-6 pt-0 p-4">
              <Link to={`/detailrecipe/${item?.id_recipe}`}>
                <Card className="radius">
                  <Card.Img
                    className="img-popular"
                    src={item?.recipe_image}
                    alt={item?.recipe_name}
                  />
                  <Card.ImgOverlay className="bg-overlay">
                    <Card.Title className="pt-text">
                      {item?.recipe_name}
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </div>
          </>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}

export default LikeSaveRecipe;
