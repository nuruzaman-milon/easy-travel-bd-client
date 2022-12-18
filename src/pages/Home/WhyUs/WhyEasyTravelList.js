import React from "react";

const WhyEasyTravelList = ({ whyEasyTravelList }) => {
  const { icon, title, decription } = whyEasyTravelList;
  return (
    <div className="border flex items-center flex-col text-center px-4 py-7 bg-primary ">
      <h2 className="text-7xl mb-8 flex justify-center ">{icon}</h2>
      <h1 className="text-2xl mb-3">{title}</h1>
      <p className="">{decription}</p>
    </div>
  );
};

export default WhyEasyTravelList;
