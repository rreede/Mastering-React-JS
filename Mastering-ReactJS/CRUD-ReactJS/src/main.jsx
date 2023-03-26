import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Holder from "./routes/Holder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "holder",
    element: <Holder />,
  },
  {
    path: "edit",
    element: <Edit />,
  },
  {
    path: "add",
    element: <Add />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
