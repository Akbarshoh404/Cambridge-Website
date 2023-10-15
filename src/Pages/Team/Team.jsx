import React from "react";
import "./team.scss";
import Nav from "../../Layoutes/Navbar/Navbar";
import Footer from "../../Layoutes/Footer/Footer";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Team = () => {
  const { t, i18n } = useTranslation();

  const [teacherData, setTeacherData] = useState([]);
  const [courseData, setCourseData] = useState([]);

  const getTeachersApi = async () => {
    await axios
      .get("https://cambridge-api-367j.onrender.com/teacher")
      .then((res) => {
        setTeacherData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.log(courseData);
  console.log(teacherData);
  useEffect(() => {
    getTeachersApi();
  }, []);
  return (
    <>
      <Nav />

      <div id="team">
        <p id="team_p1">{t("team_p1")}</p>
        <div className="container">
          {teacherData.map((el) => {
            return (
              <div className="card" key={el.id}>
                <img src={el.image} id="team_img" alt="" />
                <div id="card_div">
                  <p id="team_name">{el.name}</p>
                  <p id="team_desc">
                    I love my work and I love teaching. I look to the student as
                    my children. If they come after lesson I will help them for
                    free. Becouse my students are my childrens
                  </p>

                  <div>
                    <div>
                      <p id="team_desc_p1">7+</p>
                      <p id="team_desc_p2">IELTS SCORE</p>
                    </div>

                    <div>
                      <p id="team_desc_p1">5+ YEARS</p>
                      <p id="team_desc_p2">EXPERIENCE</p>
                    </div>

                    <div>
                      <p id="team_desc_p1">1000+</p>
                      <p id="team_desc_p2">STUDENTS</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
