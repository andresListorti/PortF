import React from "react";
import "../Header/header.css";
import myPicture from "../../assets/img/CV.jpeg";

const Header = () => {
  // const solo = 'sos'
  // const sala = 'ss'
  // const popo = solo == sala ? true : solo !== sala ? console.log(solo) : false

  return (
    <section className="header">
      <header>
        <div className="photo">
          <img src={myPicture} alt="" />
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
