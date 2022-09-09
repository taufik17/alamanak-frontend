/* eslint-disable no-unused-vars */
import React from "react";
import MenuNav from "../components/molecules/menuNav";
import ProfileSection from "../components/organisms/ProfileSection";
import Footer from "../components/organisms/FooterSection";
import { connect } from "react-redux";

function Profile(props) {
  console.log("props", props);
  React.useEffect(() => {
    if (localStorage.getItem("token_almnk") === null) {
      window.location.href = "/"
    }
  }, []);

  return (
    <>
      <MenuNav />
      <ProfileSection />
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  example: state?.example,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
