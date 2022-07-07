import React from "react";

function bgLogo() {
  return (
    <div className="col-sm-6 px-0 d-none d-sm-block">
      <div className="background">
        <div className="opacity"></div>
        <img
          src={require("../../image/logo.png")}
          alt="Background login"
          className="logo-login"
        />
      </div>
    </div>
  );
}

export default bgLogo;
