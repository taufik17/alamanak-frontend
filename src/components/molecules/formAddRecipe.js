/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSelector } from "react-redux";
import axios from "axios";
import { FiBookOpen, FiUploadCloud } from "react-icons/fi";
import styleAddRecipe from "./AddRecipe.module.css";
import { Form } from "react-bootstrap";
import { FaDelicious } from "react-icons/fa";
import VideoLink from "./videoLink";
import Loading from "../atoms/spineer";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

function FormAddRecipe() {
  const [title, setTitle] = useState("");
  const [taste, setTaste] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageRecipe, setImageRecipe] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);
  const [categorySelect, setCategorySelect] = useState([]);
  const [category, setCategory] = useState([]);
  const [ingrdnts, setIngrdnts] = React.useState("");
  const [videoData, setVideoData] = useState(null);

  const { auth } = useSelector((state) => state);
  const userToken = auth?.token;
  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
      "content-type": "multipart/form-data",
    },
  };

  const handleChangeVideo = useCallback((newValue) => {
    setVideoData(newValue?.formData?.linkVideo);
  }, []);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/category_recipe`)
      .then((res) => {
        setCategory(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpg", "image/jpeg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      setImageRecipe(selected);
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };

  const handlePost = () => {
    setIsLoading(true);
    const data = new FormData();
    data.append("recipeName", title);
    data.append("ingredients", ingrdnts);
    data.append("image", imageRecipe);
    data.append("category", categorySelect);
    data.append("taste", taste);
    data.append("video", JSON.stringify(videoData));

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/recipe/add`, data, config)
      .then((res) => {
        setIsLoading(false);
        Swal.fire({
          icon: "success",
          title: "Sukses",
          text: "Recipe Berhasil ditambah",
        }).then((result) =>
          result.isConfirmed ? Navigate("/profile") : null
        );
      })
      .catch((err) => {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: { err },
        });
      });
  };

  return (
    <>
      <div className="container text-center mt-5 pt-4 mb-5">
        <div className="row pt-4 align-items-center mb-4">
          <div className="col">
            <h4>Add Your Recipe</h4>
          </div>
        </div>

        <div className="mt-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePost();
            }}
          >
            <div className={`${styleAddRecipe.search} mb-2 mt-3 mb-4`}>
              <input
                type="text"
                className={`${styleAddRecipe.formControl} form-control`}
                placeholder="Title"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              <FiBookOpen className={styleAddRecipe.icon} />{" "}
            </div>

            {error && (
              <p className={styleAddRecipe.errorMsg}>File not supported</p>
            )}

            <div
              className={`${styleAddRecipe.imgPreview} mb-4`}
              style={{
                background: imgPreview
                  ? `url("${imgPreview}") no-repeat center/cover`
                  : null,
              }}
            >
              {!imgPreview && (
                <>
                  <label htmlFor="fileUpload">
                    <FiUploadCloud className={styleAddRecipe.iconUpload} />
                  </label>
                  <input
                    type="file"
                    id="fileUpload"
                    required
                    onChange={handleImageChange}
                  />
                  <span>(jpg, jpeg, or png)</span>
                </>
              )}
            </div>
            {imgPreview && (
              <button
                onClick={() => setImgPreview(null)}
                className={styleAddRecipe.rmImage}
              >
                Remove image
              </button>
            )}

            <div className="my-4">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setCategorySelect(e.target.value)}
              >
                <option>Category</option>
                {category.map((item) => (
                  <>
                    <option value={item.id_category}>
                      {item.name_category}
                    </option>
                  </>
                ))}
              </Form.Select>
            </div>

            <CKEditor
              editor={ClassicEditor}
              data="<h4>Deskripsi :</h4><p>&nbsp;</p><h4>Bahan :</h4><p>&nbsp;</p><h4>Cara Memasak :</h4><p>&nbsp;</p>"
              onChange={(event, editor) => {
                const data = editor.getData();
                setIngrdnts(data);
              }}
            />

            <div className={`${styleAddRecipe.search} mb-2 mt-4 mb-2`}>
              <input
                type="text"
                className={`${styleAddRecipe.formControl} form-control`}
                placeholder="Taste: ex: pedas, gurih"
                required
                onChange={(e) => setTaste(e.target.value)}
              />
              <FaDelicious className={styleAddRecipe.icon} />{" "}
            </div>

            <div className="mb-4">
              <VideoLink videoData={handleChangeVideo} />
            </div>

            <div className="text-center">
              <button
                className={`${styleAddRecipe.btnPost} btn btn-warning px-5 mt-3 py-2`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <Loading /> : "Post"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormAddRecipe;
