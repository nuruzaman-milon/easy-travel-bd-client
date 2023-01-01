import { Label, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BusProvider = () => {
  const [dbUser, setDbUser] = useState([]);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  console.log(dbUser);
  // const { email } = user;

  useEffect(() => {
    fetch(`https://easy-travel-bd-server.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setDbUser(data));
  }, [user]);

  const busProviers = (e) => {
    e.preventDefault();
    const form = e.target;
    const busName = form.busName.value;
    const email = form.email.value;
    const licenseNumber = form.licenseNumber.value;

    const busProviderInfo = {
      busName: busName,
      email: email,
      licenseNumber: licenseNumber,
      isVerified: false,
    };

    console.log(busProviderInfo);

    //  save database

    fetch("https://easy-travel-bd-server.vercel.app/busProvider", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(busProviderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
        }
        form.reset();
        toast.success("Bus Provider information Submitted");
        navigate("/add-buses");
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="lg:w-1/3 mx-auto my-7 md:my-16">
      <div className="border shadow-md">
        <h1 className="text-center mt-5 font-bold text-primary text-3xl">
          Bus Company
        </h1>
        <div className="p-10">
          <form onSubmit={busProviers} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name1" value="Bus Name" />
              </div>
              <TextInput
                name="busName"
                id="name1"
                type="text"
                placeholder="Bus Name"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                name="email"
                id="email1"
                type="email"
                placeholder="Your email"
                defaultValue={user?.email}
                disabled
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="License" value="Bus Company License" />
              </div>
              <TextInput
                name="licenseNumber"
                id="License"
                type="text"
                required={true}
                placeholder="Bus Company License"
              />
            </div>

            <input
              className="bg-primary py-2 px-4 rounded-lg cursor-pointer font-medium text-white"
              type="submit"
              value="Save"
            />
          </form>
          {/* {error && <small className="text-red-500 mt-2">{error}</small>} */}
        </div>
      </div>
    </section>
  );
};

export default BusProvider;
