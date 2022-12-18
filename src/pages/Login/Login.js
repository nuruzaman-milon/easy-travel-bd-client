import { Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <section className="lg:w-1/3 mx-auto my-7 md:my-16">
      <div className="border shadow-md">
        <div className="flex justify-between">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? `bg-primary text-center py-2 border-b border-b-primary text-white font-medium w-full`
                : `text-center border-b  text-primary py-2 font-medium w-full`
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/sign-up"
            className={({ isActive }) =>
              isActive
                ? `bg-primary text-center py-2 border-b border-b-primary text-white font-medium w-full`
                : `text-center border-b  text-primary py-2 font-medium w-full`
            }
          >
            Sign Up
          </NavLink>
        </div>

        <div className="p-10">
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="Your email"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                required={true}
                placeholder="Your Password"
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <input
              className="bg-primary py-2 px-4 rounded-lg cursor-pointer font-medium text-white"
              type="submit"
              value="Login"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
