import React from "react";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
const Section2 = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="Home_sec2">
        <div className="container">
          <Fade left cascade>
            <div>
              <p>{t("home_sec2_p1")}</p>
              <p>{t("home_sec2_p2")}</p>
              <button>{t("navbar_p6")}</button>
            </div>
          </Fade>

          <Fade right cascade>
            <img
              src="https://cambridgeonline.uz/_nuxt/img/Rectangle%20(1).6c73da8.png"
              alt=""
            />
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Section2;
