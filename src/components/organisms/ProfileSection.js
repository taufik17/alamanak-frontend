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

function ProfileSection() {
  const [listMyRecipe, setListMyRecipe] = React.useState([]);
  const [profile, setProfile] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);
  const [foundRecipe, setFoundRecipe] = React.useState(false);
  const [key, setKey] = React.useState("myRecipe");

  const token = localStorage.getItem("token_almnk");

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/recipe/find/myrecipe`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setListMyRecipe(res?.data?.data);
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
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/users/myprofile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProfile(res?.data);
        console.log("profil", res?.data);
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
                  {foundRecipe ? (
                    <>
                      <MyRecipe data={listMyRecipe} />
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
              <LikeSave data={listMyRecipe} />
            </Tab>
            <Tab eventKey="likedRecipe" title="Liked Recipe">
              <LikeSave data={listMyRecipe} />
            </Tab>
          </Tabs>
        </Container>

        <Container></Container>
      </Container>
    </>
  );
}

export default ProfileSection;
