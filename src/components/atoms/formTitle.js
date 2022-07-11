import React from "react";

function formTitle(props) {
  const { title, desc } = props;
  return (
    <>
      <h4 clasName="welcome-text">{title}</h4>
      <p clasName="desc-login">{desc}</p>
    </>
  );
}

export default formTitle;
