import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { Label, Radio, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  auth,
  facebookProvider,
  googleProvider,
} from "../../firebase/firebase.config";
import { setError, setLogin } from "../../redux/userSlice";
import { saveUsers } from "../../api/saveUsers";

import { toast } from "react-hot-toast";
import { useToken } from "../../Hooks/useToken";
// import { data } from "autoprefixer";

const SignUp = () => {
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
      window.location.reload();
    }
  }, [from, token, navigate])
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.user);
  console.log(user);
  console.log(error);

  // sign in with form
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const accountType = form.accountType.value;
    // console.log(fullName, email, password, accountType);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: fullName,
        }).then(() => {
          dispatch(
            setLogin({
              user: result.user,
            })
          );
          setCreatedUserEmail(result.user.email)
          // user information
          const userInfo = {
            name: fullName,
            email: email,
            accountType: accountType,
            isVerified: false,
          };

          // user save database
          saveUsers(userInfo).then((data) => {
            if (data.acknowledged) {
              console.log(data);
            }
          });
        });
        form.reset();
        toast.success("User Created successfully");
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
        // user information
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          accountType: "user",
          isVerified: false,
        };
        setCreatedUserEmail(result.user.email)
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
        setCreatedUserEmail(result.user.email)
        // user information
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          accountType: "user",
          isVerified: false,
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
      <div className="border  shadow-md">
        <div className="flex justify-between">
          <Link
            to="/login"
            className="text-center border-b text-primary py-2 font-medium w-full"
          >
            Login
          </Link>

          <Link
            to="/sign-up"
            className="bg-primary text-center  border-b border-b-primary py-2 text-white font-medium w-full"
          >
            Sign Up
          </Link>
        </div>

        {/* <h1 className="text-center text-primary text-2xl">Sign Up</h1>
        <hr className="my-4" /> */}

        <div className="p-10">
          <form onSubmit={handleSignIn} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name1" value="Full Name" />
              </div>
              <TextInput
                name="fullName"
                id="name1"
                type="text"
                placeholder="Full Name"
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

            <div className="">
              <legend className="mb-2">Choose your account Type</legend>
              <div className="flex items-center mb-2 gap-2">
                <Radio
                  id="user"
                  name="accountType"
                  value="user"
                  defaultChecked={true}
                />
                <Label htmlFor="united-state">User</Label>
              </div>
              <div className="flex items-center mb-2 gap-2">
                <Radio
                  id="bus-provider"
                  name="accountType"
                  value="busProvider"
                />
                <Label htmlFor="united-state">Bus Provider</Label>
              </div>
            </div>
            <input
              className="bg-primary py-2 px-4 rounded-lg cursor-pointer font-medium text-white"
              type="submit"
              value="Sign Up"
            />
          </form>
          {error && <small className="text-red-500 mt-2">{error}</small>}
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 "></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Sign up with social accounts
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

export default SignUp;
