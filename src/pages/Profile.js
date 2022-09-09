import React from "react";
import MenuNav from "../components/molecules/menuNav";
import ProfileSection from "../components/organisms/ProfileSection";
import Footer from "../components/organisms/FooterSection";

function Profile() {
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

export default Profile;
