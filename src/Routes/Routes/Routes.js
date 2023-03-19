import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";

///// Tanvir Import Start (5-35) /////
import Shop from "../../Pages/Shop/Shop";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";

























///// Tanvir Import End (5-35) /////

///// Parvez Import Start (37-70) /////
































///// Parvez Import End (37-70) /////

///// Amir Import Start (72-105) /////
































///// Amir Import End (72-105) /////

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            ////// Tanvir Area Start (117-170) //////
            { path: '/shop', element: <Shop /> },
            { path: '/blog', element: <Blog /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
















































            ////// Tanvir Area End (117-170) //////

            ////// Parvez Area Start (172-230) //////

























































            ////// Parvez Area End (172-230) //////

            ////// Amir Area Start (232-290) //////

























































            ////// Amir Area End (232-290) //////
        ]
    }
])