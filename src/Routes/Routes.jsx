import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import Services from "../components/HomeLayout/Services";
import ServiceDetails from "../Pages/ServiceDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Forgate from "../Pages/Forgate";
import Reviews from "../components/Reviews";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import About from "../Pages/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Services></Services>,
            loader: () => fetch("../carear.json"),
          },
        ],
      },
      {
        path: "/secvice/:id",
        element: (
          <PrivetRoute>
            <ServiceDetails></ServiceDetails>
          </PrivetRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch("../carear.json");
          const data = await response.json();
          const service = data.find(
            (service) => service.id === parseInt(params.id)
          );
          return service;
        },
        children: [
          {
            path: "/secvice/:id",
            element: <Reviews></Reviews>,
            loader: async ({ params }) => {
              const response = await fetch("../review.json");
              const data = await response.json();
              const review = data.find(
                (review) => review.id === parseInt(params.id)
              );
              return review;
            },
          },
        ],
      },
      {
        path: "/myprofile",
        element: (
          <PrivetRoute>
            <MyProfile></MyProfile>
          </PrivetRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivetRoute>
            <About></About>
          </PrivetRoute>
        ),
        loader: () => fetch("about.json"),
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
        path: "/login/forgote",
        element: <Forgate></Forgate>,
      },
    ],
  },
]);

export default routes;
