import React from "react";

const WhyEasyTravelList = ({ whyEasyTravelList }) => {
  const { icon, title, decription } = whyEasyTravelList;
  return (
    <div className="border text-center px-4 py-6">
      <h2 className="text-8xl mb-8 w-1/2 mx-auto ">{icon}</h2>
      <h1 className="text-2xl mb-3">{title}</h1>
      <p className="">{decription}</p>
    </div>
  );
};

export default WhyEasyTravelList;
