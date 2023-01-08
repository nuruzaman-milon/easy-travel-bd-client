import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AboutUs from "../../pages/AboutUs/AboutUs";
import AddBus from "../../pages/AddBus/AddBus";
import AllBusProviderList from "../../pages/AllBusProviderList/AllBusProviderList";
import BusProvider from "../../pages/BusProvider/BusProvider";
import CancelTicket from "../../pages/CancelTicket/CancelTicket";
import ContactUs from "../../pages/ContactUs/ContactUs";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyBuses from "../../pages/MyBuses/MyBuses";
import OurPartners from "../../pages/OurPartners/OurPartners";
import Profile from "../../pages/Profile/Profile";
import Query from "../../pages/Query/Query";
import SearchTickets from "../../pages/SearchTickets/SearchTickets/SearchTickets";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/our-partners",
        element: <OurPartners />,
      },
      {
        path: "/query",
        element: <Query />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/cancel-ticket",
        element: <CancelTicket></CancelTicket>,
      },
      {
        path: "/add-buses",
        element: <PrivateRoute><AddBus /></PrivateRoute>,
      },
      {
        path: "/profile/:email",
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: "/bus-provider",
        element: <PrivateRoute><BusProvider /></PrivateRoute>,
      },
      {
        path: "/allBusProviderList",
        element: <PrivateRoute><AllBusProviderList /></PrivateRoute>,
      },
      {
        path: "/search",
        element: <SearchTickets></SearchTickets>,
      },
      {
        path: "/my-buses",
        element: <MyBuses></MyBuses>,
      },
    ],
  },
]);
