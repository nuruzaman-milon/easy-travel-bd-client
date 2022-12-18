import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AboutUs from "../../pages/AboutUs/AboutUs";
import ContactUs from "../../pages/ContactUs/ContactUs";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import OurPartners from "../../pages/OurPartners/OurPartners";
import Query from "../../pages/Query/Query";
import SignUp from "../../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/our-partners',
                element: <OurPartners />
            },
            {
                path: '/query',
                element: <Query />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/cancel-ticket',
                // element:
            }
        ]
    }
])