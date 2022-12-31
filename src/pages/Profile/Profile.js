import { Label, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateUser } from "../../api/saveUsers";
import { toast } from "react-hot-toast";

const Profile = () => {
  const [dbUser, setDbUser] = useState([]);
  const { user } = useSelector((state) => state.user);

  console.log(dbUser);
  const { email } = dbUser;

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setDbUser(data));
  }, [user]);

  const userUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const phone = form.phone.value;

    const userInfo = {
      name: fullName,
      email,
      phone: phone,
    };
    console.log(userInfo);

    updateUser(userInfo)
      .then((data) => {
        if (data?.data.acknowledged) {
          console.log(data?.data);
          form.reset();
          toast.success("User updated successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="lg:w-1/3 mx-auto my-7 md:my-16">
      <div className="border shadow-md">
        <h1 className="text-center mt-5 font-bold text-primary text-3xl">
          Updated Profile
        </h1>
        <div className="p-10">
          <form onSubmit={userUpdateProfile} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name1" value="Your Name" />
              </div>
              <TextInput
                name="fullName"
                id="name1"
                type="text"
                placeholder="Your Name"
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
                defaultValue={email}
                disabled
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone1" value="Your phone Number" />
              </div>
              <TextInput
                name="phone"
                id="phone1"
                type="number"
                required={true}
                placeholder="Your Phone Number"
              />
            </div>

            <input
              className="bg-primary py-2 px-4 rounded-lg cursor-pointer font-medium text-white"
              type="submit"
              value="Update"
            />
          </form>
          {/* {error && <small className="text-red-500 mt-2">{error}</small>} */}
        </div>
      </div>
    </section>
  );
};

export default Profile;
