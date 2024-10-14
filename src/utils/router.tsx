import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "../index.css";
import Home from "../pages/Home";
import About from "../pages/About";
import FAQs from "../pages/FAQs";
import ContactUs from "../pages/ContactUs";
import Notfound404 from "../pages/Notfound404";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/faqs", element: <FAQs /> },
      { path: "/contactUs", element: <ContactUs /> },
      { path: "/*", element: <Notfound404 /> },
    ],
  },
]);
