import { Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {
  auth,
  facebookProvider,
  googleProvider,
} from "../../firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLogin } from "../../redux/userSlice";
import { saveUsers } from "../../api/saveUsers";
import { useToken } from "../../Hooks/useToken";

const Login = () => {
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);
  const dispatch = useDispatch();
  // const userInfo = useSelector((state) => console.log(state.user));

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        dispatch(
          setLogin({
            user: result.user,
          })
        );
        setLoginUserEmail(result.user.email)
        form.reset();
      })
      .catch((e) => {
        dispatch(
          setError({
            error: e.message,
          })
        );
      });
  };

  // Google Sign in
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // console.log(result.user)
        dispatch(
          setLogin({
            user: result.user,
          })
        );
        setLoginUserEmail(result.user.email)
        // user information
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          accountType: "user",
        };

        // save user data base
        saveUsers(userInfo).then((data) => {
          if (data.acknowledged) {
            console.log(data);
          }
        });
      })
      .catch((e) => {
        dispatch(
          setError({
            error: e.message,
          })
        );
      });
  };

  // Facebook Sign in
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // console.log(result.user)
        dispatch(
          setLogin({
            user: result.user,
          })
        );
        setLoginUserEmail(result.user.email)
        // user information
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          accountType: "user",
        };

        // save user data base
        saveUsers(userInfo).then((data) => {
          if (data.acknowledged) {
            console.log(data);
          }
        });
      })
      .catch((e) => {
        dispatch(
          setError({
            error: e.message,
          })
        );
      });
  };

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
          <form onSubmit={handleLogIn} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                name="email"
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
                name="password"
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

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 "></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 "></div>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="border p-2 rounded-md hover:bg-white"
            >
              <FcGoogle className="text-xl"></FcGoogle>
            </button>
            <button
              onClick={handleFacebookSignIn}
              className="border p-2 rounded-md hover:bg-white"
            >
              <ImFacebook className="text-xl text-blue-600"></ImFacebook>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
