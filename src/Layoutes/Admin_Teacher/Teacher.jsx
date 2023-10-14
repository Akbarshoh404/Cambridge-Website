import React from "react";
import "./teacher.scss";
import Nav from "../Admin_Navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Teacher = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [image, setImage] = useState("");
  const [course, setCourse] = useState("");

  const getTeachersApi = async () => {
    await axios
      .get("https://cambridge-api-367j.onrender.com/teacher")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.log(data);
  useEffect(() => {
    getTeachersApi();
  }, []);

  const Create = async () => {
    await axios
      .post("https://cambridge-api-367j.onrender.com/teacher", {
        course: course,
        image: image,
        name: name,
        surname: surName,
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
      .delete(`https://cambridge-api-367j.onrender.com/teacher/${id}`)
      .then(() => {
        alert("deleted successfully")
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const updateApi = (id) => {
    axios
      .patch(`https://cambridge-api-367j.onrender.com/teacher/${id}`, {
        course: course,
        image: image,
        name: name,
        surname: surName,
      })
      .then(() => {
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
            <p id="teacher_text">If you want change something, Please enter all things!!!</p>

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
              type="int"
              placeholder="Course name:"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
            <input
              value={image}
              type="text"
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image:"
            />
            <button
              onClick={() => {
                Create();
              }}
            >
              Submit
            </button>
          </div>

          <div id="teacher_map">
            {data.map((el) => {
              return (
                <div id="teacher_card" key={el._id}>
                  <img src={el.image} alt="" />
                  <p>{el.name}</p>
                  <p>{el.surname}</p>
                  <p>{el.course}</p>

                  <button id="admin_change_button" onClick={() => updateApi(el._id)}>Change</button>
                  <button
                   id="admin_delete_button" 
                   onClick={() => apiDelete(el._id)}>delete</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher;
