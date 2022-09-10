/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import axios from "axios";
import "./ProfilePage.css";
import { Row, Col, Container, Tab, Tabs } from "react-bootstrap";
import MyRecipe from "../molecules/MyRecipe";
import LikeSave from "../molecules/LikeSaveRecipe";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";

function ProfileSection() {
  const { auth } = useSelector((state) => state);
  const [ListRecipe, setListRecipe] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);
  const [foundRecipe, setFoundRecipe] = React.useState(false);
  const [key, setKey] = React.useState("myRecipe");

  const token = localStorage.getItem("token_almnk");

  React.useEffect(() => {
    setisLoading(true);
    if (key == "myRecipe") {
      axios
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
    } else if (key == "savedRecipe") {
      setListRecipe([]);
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/recipe/findSave/id_user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          id: auth?.profile?.id_user,
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
    } else if(key == "likedRecipe") {
      setListRecipe([]);
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/recipe/findLike/id_user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          id: auth?.profile?.id_user,
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
    }
  }, [key]);

  return (
    <>
      <Container fluid className="bg-pink">
        <Row className="justify-content-sm-center profile-section">
          <Col md="auto">
            <img
              src={auth?.profile?.user_image}
              alt="profile"
              className="rounded-circle profile-image"
            />
            <h4 className="text-center">{auth?.profile?.name}</h4>
          </Col>
        </Row>

        <Container>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="myRecipe" title="My Recipe">
              {isLoading ? (
                <>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 p-4">
                      <Skeleton width={300} height={340} />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 p-4">
                      <Skeleton width={300} height={340} />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 p-4">
                      <Skeleton width={300} height={340} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {foundRecipe ? (
                    <>
                      <MyRecipe data={ListRecipe} />
                    </>
                  ) : (
                    <>
                      <div className="text-center py-3">
                        <h6>Not Found</h6>
                      </div>
                    </>
                  )}
                </>
              )}
            </Tab>
            <Tab eventKey="savedRecipe" title="Saved Recipe">
              {isLoading ? (
                <>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 p-4">
                      <Skeleton width={300} height={340} />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 p-4">
                      <Skeleton width={300} height={340} />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 p-4">
                      <Skeleton width={300} height={340} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {foundRecipe ? (
                    <>
                      <LikeSave data={ListRecipe} />
                    </>
                  ) : (
                    <>
                      <div className="text-center py-3">
                        <h6>Not Found</h6>
                      </div>
                    </>
                  )}
                </>
              )}
            </Tab>
            <Tab eventKey="likedRecipe" title="Liked Recipe">
              {isLoading ? (
                <>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 p-4">
                      <Skeleton width={300} height={340} />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 p-4">
                      <Skeleton width={300} height={340} />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 p-4">
                      <Skeleton width={300} height={340} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {foundRecipe ? (
                    <>
                      <LikeSave data={ListRecipe} />
                    </>
                  ) : (
                    <>
                      <div className="text-center py-3">
                        <h6>Not Found</h6>
                      </div>
                    </>
                  )}
                </>
              )}
            </Tab>
          </Tabs>
        </Container>

        <Container></Container>
      </Container>
    </>
  );
}

export default ProfileSection;
