import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import Services from "../components/HomeLayout/Services";
import ServiceDetails from "../Pages/ServiceDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
        element: <ServiceDetails></ServiceDetails>,
        loader: async ({ params }) => {
          const response = await fetch("../carear.json");
          const data = await response.json();
          const service = data.find(
            (service) => service.id === parseInt(params.id)
          );
          return service;
        },
      },
      {
        path: "/myprofile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
