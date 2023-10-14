import React from "react";
import "./Admin.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Admin_login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);

    const loginChange = (event) => {
      setLogin(event.target.value);
    };

    const passwordChange = (event) => {
      setPassword(event.target.value);
    };
  
    console.log(login);
    console.log(password);

    return (
    <>
      <div id="body1">
        <div className="loader">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
        </div>``
        <div className="card99">
          <div className="input">
            <h2>Login</h2>
            <input type="text" onChange={loginChange}/>
          </div>

          <div className="input">
            <h2>Password</h2>
            <input type="text" onChange={passwordChange}/>
          </div>
        {login === "kurwa" && password === "1942" ? (
            <button id="button" onClick={() => navigate("/yebanutiygandon")}>Submit</button>
        ):(
            <button id="button" onClick={() => {
                alert("Kurwa")
            }}>Submit</button>
        )}
          
        </div>

        <div className="loader">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
        </div>
      </div>
    </>
  );
};

export default Admin_login;
