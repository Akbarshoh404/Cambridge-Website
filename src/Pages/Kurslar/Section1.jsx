import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { data } from '../../API/Course_data';
const Section1 = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <header id="Course_header">
        <div className="container">
          <p id="kurs_p1">{t("kurs_p1")}</p>

          <div id="kurs_flex">

            {data.map((el) => {
              return (
                <Link to={`${el.name}`} key={data.id}>
                  <div className="kurs_card">
                    <img
                      src={el.logo}
                      alt="logo"
                    />
                    <p id="kurs_p2">{el.name}</p>
                    <p id="kurs_p3">{el.desc}</p>
                    <button>{t("kurs_p2")}</button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
};

export default Section1;

