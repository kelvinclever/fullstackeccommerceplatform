import React from "react";
import "./wrapper.css";
import Lottie from 'lottie-react';
import animationData from '../lottieanime/62024-estrategia-marketing-online-digitaldot.json';
import animationData1 from '../lottieanime/99691-desinsafe-transportation.json';
import logo from "../images/logo.png";
import pay from "../images/pay.png";

const Wrapper = () => {
  const data = [
    {
      cover:<Lottie  animationData={animationData1} />,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: pay,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <Lottie animationData={animationData} />,
      title: "Shop With Confidence",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: logo,
      title: "24/7 Support",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];

  return (
    <section className="wrapper background">
      <div className="container grid2">
        {data.map((val, index) => (
          <div className="product" key={index}>
            <div className="img icon-circle">
              {typeof val.cover === "string" ? (
                <img src={val.cover} alt="Cover" />
              ) : (
                val.cover
              )}
            </div>
            <h3>{val.title}</h3>
            <p>{val.decs}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wrapper;
