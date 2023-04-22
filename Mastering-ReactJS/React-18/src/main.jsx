import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Book from "./BookList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Book />
  </React.StrictMode>
);
