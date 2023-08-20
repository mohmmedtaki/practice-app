import React from "react";
import { Link, Outlet } from "react-router-dom";

function ImageCategory() {
  return (
    <>
      <div style={{ marginLeft: "30px" }}>
        <h1 style={{ marginTop: "30px" }}>Category</h1>
        <nav>
          <Link to="laptop" style={{ fontSize: "25px", color: "blue" }}>
            Laptop
          </Link>
          <Link
            to="books"
            style={{ marginLeft: "20px", fontSize: "25px", color: "blue" }}
          >
            Books
          </Link>
          <Outlet />
        </nav>
      </div>
    </>
  );
}

export default ImageCategory;
