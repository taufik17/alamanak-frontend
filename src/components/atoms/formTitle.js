import React from "react";

function formTitle(props) {
  const { title, desc } = props;
  return (
    <>
      <h4 className="welcome-text">{title}</h4>
      <p className="desc-login">{desc}</p>
    </>
  );
}

export default formTitle;
