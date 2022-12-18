import React from "react";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { BiMoviePlay } from "react-icons/bi";
import WhyEasyTravelList from "./WhyEasyTravelList";
import { GrTicket } from "react-icons/gr";

const whyEasyTravel = [
  {
    id: 1,
    icon: <MdAirlineSeatReclineExtra></MdAirlineSeatReclineExtra>,
    title: "COMFORTABLE",
    decription:
      "We have very large leg space in between seats.You can spend 12 hours without any discomfort in our seats",
  },
  {
    id: 2,
    icon: <GrLocation></GrLocation>,
    title: "GPS NAVIGATION",
    decription:
      "All of our buses are equipped with GPS and Camera for safety of the valued passenger.",
  },
  {
    id: 3,
    icon: <GrTicket></GrTicket>,
    title: "BUY TICKETS EASILY",
    decription:
      "You can buy ticket from our wide range of ticketing booth and online. You can book your seat through our call center +880960777.",
  },
  {
    id: 4,
    icon: <BiMoviePlay></BiMoviePlay>,
    title: "ENTERTAINMENT ON BOARD",
    decription:
      "Our buses are equipped with full HD Display and DVD player to play drama , music and movies in order to make the journey more enjoyable.",
  },
];

const WhyUs = () => {
  return (
    <section className="my-7 md:my-16">
      <h1 className="text-center capitalize text-3xl font-bold mb-14">
        Why Easy Travel BD
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {whyEasyTravel.map((whyEasyTravelList) => (
          <WhyEasyTravelList
            key={whyEasyTravelList.id}
            whyEasyTravelList={whyEasyTravelList}
          ></WhyEasyTravelList>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
