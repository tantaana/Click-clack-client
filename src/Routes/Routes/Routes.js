import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";

///// Tanvir Import Start (5-20) /////














///// Tanvir Import End (5-20) /////

///// Parvez Import Start (22-40) /////

















///// Parvez Import End (22-40) /////

///// Amir Import Start (42-60) /////

















///// Amir Import End (42-60) /////

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            ////// Tanvir Area Start (72-100) //////



























            ////// Tanvir Area End (72-100) //////

            ////// Parvez Area Start (102-130) //////



























            ////// Parvez Area End (102-130) //////

            ////// Amir Area Start (132-160) //////



























            ////// Amir Area End (132-160) //////
        ]
    }
])