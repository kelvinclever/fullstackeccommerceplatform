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
      title: "country wide Delivery",
      decs: "At QuickCheck Store, we believe that affordable prices should never mean compromising on quality.",
    },
    {
      cover: pay,
      title: "Safe Payment",
      decs: "Your online security is our utmost priority. We employ robust security measures to protect your personal information and ensure a safe shopping environment. ",
    },
    {
      cover: <Lottie animationData={animationData} />,
      title: "Shop With Confidence",
      decs: "We value our customers and strive to provide exceptional service every step of the way",
    },
    {
      cover: logo,
      title: "24/7 Support",
      decs: " Our dedicated customer support team is here to assist you every step of the way.",
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
