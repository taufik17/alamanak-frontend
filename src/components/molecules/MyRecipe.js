/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import "../molecules/popular.css";
import { Card } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { BiTrash, BiEdit } from "react-icons/bi";
import style from "../atoms/likesave.module.css";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import axios from "axios";

function MyRecipe(props) {
  const { auth } = useSelector((state) => state);
  const userToken = auth?.token;
  console.log("mytkone", userToken);
  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };

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

  const handleDelete = (id, name) => {
    Swal.fire({
      title: `Delete ${name} ?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        axios
          .delete(`${process.env.REACT_APP_BASE_URL}/recipe/delete`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
            data: {
              idRecipe: id
            }
          })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", `${name} has been deleted.`, "success");
      }
    });
  };

  return (
    <>
      <div className="row">
        {currentItems.map((item) => (
          <>
            <div className="col-lg-4 col-md-4 col-sm-6 pt-4 p-3">
              <Card className="radius">
                <Card.Img
                  className="img-popular"
                  src={item?.recipe_image}
                  alt={item?.recipe_name}
                />
                <Card.ImgOverlay>
                  <Card.Title className="act">
                    <BiEdit className={`${style.iconEdit}  mx-1 cursor`} />
                    <BiTrash
                      className={`${style.iconDelete}  mx-1 cursor`}
                      onClick={() => {
                        handleDelete(item?.id_recipe, item?.recipe_name);
                      }}
                    />
                  </Card.Title>
                </Card.ImgOverlay>

                <Link to={`/detailrecipe/${item?.id_recipe}`} className="p-0">
                  <Card.ImgOverlay className="bg-overlay">
                    <Card.Title className="pt-text">
                      {item?.recipe_name}
                    </Card.Title>
                  </Card.ImgOverlay>
                </Link>
              </Card>
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

export default MyRecipe;
