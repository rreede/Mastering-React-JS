import React from "react";
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Product List</h1>
      <div>
        <Link to={"/addproduct"}>
          <button>ADD</button>
        </Link>
        <button>MASS DELETE</button>
      </div>
    </header>
  );
}

export default Header;
