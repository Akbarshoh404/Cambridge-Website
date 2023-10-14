import React from "react";
import Nav from "../Admin_Navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "../Admin_Navbar/nav.scss";
import "./app.scss"

const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [course, setCourse] = useState("");
  const [phone, setPhone] = useState("");

  const getRequestsApi = async () => {
    await axios
      .get("https://cambridge-api-367j.onrender.com/request")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.log(data);
  useEffect(() => {
    getRequestsApi();
  }, []);

  const Create = async () => {
    await axios
      .post("https://cambridge-api-367j.onrender.com/request", {
        course: course,
        student_name: name,
        student_surname: surName,
        student_phone_number: phone,
      })
      .then(function () {
        window.location.reload();
        console.log("Success");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const apiDelete = (id) => {
    axios
      .delete(`https://cambridge-api-367j.onrender.com/request/${id}`)
      .then(() => {
        alert("Success");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <Nav />
      <div id="body">
        <div id="admin">
          <div id="teacher_inputs">
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="name:"
            />
            <input
              type="text"
              placeholder="Surname:"
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Course name:"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
            <input
              value={phone}
              type="number"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number:"
            />
            <button
              onClick={() => {
                Create();
              }}
            >
              Submit
            </button>
          </div>

          <div id="request_map">
            {data.map((el) => {
              return (
                <div id="teacher_card" key={el._id}>
                  <p>{el.student_name}</p>
                  <p>{el.student_surname}</p>
                  <p>{el.student_phone_number}</p>
                  <p>{el.course}</p>

                  <button
                    id="admin_change_button"
                    onClick={() => apiDelete(el._id)}
                  >
                    Confirm
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
