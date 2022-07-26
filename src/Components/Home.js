import React from "react";
import Slider from "./Slider";

export const Home = () => {
  return (
    <div className="slogan">
      <h1 id="slogan">
        Life Is A Party
        <br/>
        Dress Like It
      </h1>
      <h2>Give your wardrobe an upgrade!</h2>
      <>
        <Slider />
      </>
    </div>
  );
};
