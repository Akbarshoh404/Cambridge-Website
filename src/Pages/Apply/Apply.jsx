import React from "react";
import "./apply.scss";
import { useParams } from "react-router-dom";
import { data } from "../../API/Course_data";
import axios from "axios";
import { useState, useEffect } from "react";
import Nav from "../../Layoutes/Navbar/Navbar";
import toast, { Toaster } from "react-hot-toast";
import logo from "../../API/logo.png";
import img from "../../API/img.png";

const Apply = () => {
  const { category } = useParams();
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [phone, setPhone] = useState("");

  const PostRequest = async () => {
    await axios
      .post("https://cambridge-api-367j.onrender.com/request", {
        course: category,
        student_name: name,
        student_surname: surName,
        student_phone_number: phone,
      })
      .then(() => {
        window.location.reload();
        notify("Success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const notify = (message) => toast(message);

  return (
    <>
      <Nav />
      <div id="apply">
        <div id="apply_div1">
          <p id="apply_p1">
            The first Hybrid Education Language Center in Uzbekistan!
          </p>
          <p id="apply_p2">
            Join our training center and achieve high results with our new
            Hybrid Education system!
          </p>
          <img src={img} alt="Hybrid Education" id="apply_img1" />
        </div>
        <div id="apply_div2">
          <img src={logo} alt="Cambridge LC Logo" id="apply_logo" />
          <p id="apply_p3">Welcome to Cambridge LC.</p>
          <p id="apply_p4">Регистрация</p>
          <input
            type="text"
            placeholder="Name:"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Surname:"
            value={surName}
            onChange={(e) => setSurName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone number:"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            onClick={() => {
              if (
                name.length >= 1 &&
                surName.length >= 1 &&
                phone.length >= 1
              ) {
                notify("Success");
                PostRequest();
              } else {
                notify("Please write all your information !!!");
              }
            }}
          >
            Submit
          </button>
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default Apply;
