import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./Provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
      <ToastContainer></ToastContainer>
    </HelmetProvider>
  </StrictMode>
);
