import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./../Global.css";

//Pages
import Repos from "../Routes/Repos";
import Home from "./../Routes/Home";

//Imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/repos/:username",
        element: <Repos />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <RouterProvider router={router} />
  </>
);
