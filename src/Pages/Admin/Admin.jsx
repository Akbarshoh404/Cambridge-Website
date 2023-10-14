import React from "react";
import "./realadmin.scss";
import Navbar from "../../Layoutes/Admin_Navbar/Navbar";

const Admin = () => {
  return (
    <>
      <Navbar />
      <div id="body2">
        <div id="admin">
          <p id="admin_p">Welcome</p>

          <div className="code-loader">
            <span>
              {"{"} <span> </span> {"}"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
