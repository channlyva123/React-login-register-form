import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function RouterApp() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}
