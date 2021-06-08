import React from "react";
import geekz from "../assets/geekz.jpg";
import monokuro from "../assets/monokuro.jpg";
import eslogan from "../assets/eslogan.jpg";
import pinkroom from "../assets/pinkroom.jpg";

export const Monokuro = () => {
  return (
    <div className="">
      <div className="divContainer">
        <img src={eslogan} alt={eslogan} />{" "}
      </div>
      <div className="divContainer">
        <img src={monokuro} alt={monokuro} />
        <button
          className="btn btnMonokuro"
          onClick={() => console.log("Click")}
        >
          Click
        </button>
      </div>
      <hr />
      <div className="divContainer">
        <img src={geekz} alt={geekz} />
        <button className="btn btnGeekz" onClick={() => console.log("Click")}>
          Click
        </button>
        <button className="btnTransparent"></button>
      </div>
      <hr />
      <div className="divContainer">
        <img src={pinkroom} alt={pinkroom} />
        <button
          className="btn btnPinkRoom"
          onClick={() => console.log("Click")}
        >
          Click
        </button>
      </div>
    </div>
  );
};
