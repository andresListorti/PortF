import React from "react";
import "../Header/header.css";
import myPicture from "../../assets/img/CV.jpeg";

const Header = () => {
  return (
    <section className="header">
      <header>
        <div className="photo">
          <img src={myPicture} alt="picture of andres" />
        </div>
        <div className="title">
          <h1>Andrés Listorti</h1>
          <h2>Web Developer</h2>
        </div>
      </header>
    </section>
  );
};

export default Header;