import React from "react";

const ourEasyAmenities = [
  {
    id: 1,
    image: "https://i.ibb.co/DQbxs0Q/water.png",
    title: "Water Bottle",
    clssess: "#FDF5F6",
  },
  {
    id: 2,
    image: "https://i.ibb.co/Lns8mt7/blanket.png",
    title: "Blanket",
    clssess: "#FFFFFF",
  },
  {
    id: 3,
    image: "https://i.ibb.co/PDqXrCK/tv.png",
    title: "TV",
    clssess: "#FDF5F6",
  },
  {
    id: 4,
    image: "https://i.ibb.co/d752xb1/tracking.png",
    title: "Bus Tracking",
    clssess: "#FFFFFF",
  },
  {
    id: 5,
    image: "https://i.ibb.co/QYD2Fv2/charger.png",
    title: "Charging Port",
    clssess: "#FDF5F6",
  },
  {
    id: 6,
    image: "https://i.ibb.co/Kh2fHQN/snacks.png",
    title: "Snacks",
    clssess: "#FFFFFF",
  },
  {
    id: 7,
    image: "https://i.ibb.co/6sL2Qrg/emergency-exit.png",
    title: "Emergency Exit",
    clssess: "#FFFFFF",
  },
  {
    id: 8,
    image: "https://i.ibb.co/60skd7c/ac.png",
    title: "Air Conditioner",
    clssess: "#FDF5F6",
  },
  {
    id: 9,
    image: "https://i.ibb.co/nQJVRn9/fire.png",
    title: "Fire Extinguisher",
    clssess: "#FFFFFF",
  },
  {
    id: 10,
    image: "https://i.ibb.co/wsSTtS3/pillow.png",
    title: "Pillow",
    clssess: "#FDF5F6",
  },
  {
    id: 11,
    image: "https://i.ibb.co/fN21hPm/reading-book.png",
    title: "Reading Light",
    clssess: "#FFFFFF",
  },
  {
    id: 12,
    image: "https://i.ibb.co/Zz4QHH2/wifi.png",
    title: "Wifi",
    clssess: "#FDF5F6",
  },
];

const OurAmenities = () => {
  return (
    <section className="w-[90%] mx-auto my-7 md:my-16">
      <h1 className="text-center capitalize text-3xl font-bold mb-14">
        Bus Amenites
      </h1>
      <div>
        <div className="grid grid-cols-3  md:grid-cols-6">
          {ourEasyAmenities.map((ourEasyAmenitie) => (
            <div
              key={ourEasyAmenitie.id}
              className="flex flex-col justify-center items-center group pt-6"
              style={{ backgroundColor: `${ourEasyAmenitie.clssess}` }}
            >
              <img src={ourEasyAmenitie.image} alt="" />

              <div className="bg-primary w-full text-center py-2 invisible group-hover:visible">
                <h2 className="text-white">{ourEasyAmenitie.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAmenities;
