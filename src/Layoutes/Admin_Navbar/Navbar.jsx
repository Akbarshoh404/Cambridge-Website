import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="admin_nav">
        <div className="container">
          <Link to="/admin-teacher">
            <p>Teachers</p>
          </Link>

          <Link to="/admin-application">
            <p>Requests</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
