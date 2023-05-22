import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Recipes from "../Pages/Recipes/Recipes";
import Register from "../Pages/Register/Register";
import Terms from "../Pages/Terms/Terms";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          try {
            const slideData = await fetch('https://chef-recipe-hunter-server-lake.vercel.app/slides');
            const slides = await slideData.json();

            const chefsData = await fetch('https://chef-recipe-hunter-server-lake.vercel.app/chefs');
            const chefs = await chefsData.json();


            return {
              slides: slides,
              chefs: chefs,
            };
          } catch (error) {
            console.log(error);
          }
        }

      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,

      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/terms-conditions",
        element: <Terms></Terms>,
      },
      {
        path: "/chef-details/:id",
        element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-lake.vercel.app/chefs/${params.id}`)
      }
    ],
  },
]);

export default router;
