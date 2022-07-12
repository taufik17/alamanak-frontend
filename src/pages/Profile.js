import React from "react";
import { Navigate } from "react-router-dom";
import MenuNav from "../components/molecules/menuNav";
import ProfileSection from "../components/organisms/ProfileSection";
import Footer from "../components/organisms/FooterSection";


function Profile() {
  
  return (
    <>
      <MenuNav />
      <ProfileSection />
      <Footer />
    </>
  );
}

export default Profile;
