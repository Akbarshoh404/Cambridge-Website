import React from "react";
import header from "../../Images/Home_Header.png";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import { Link } from "@mui/material";

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <header id="Home_header">
        <div className="container">
          <div>
            <Fade left cascade>
              <div>
                <p id="header_big_p">
                  {t("home_header_p1")}
                  <span> {t("home_header_p2")}</span> {t("home_header_p3")}
                  <span> {t("home_header_p4")}</span>
                </p>

                <p>
                  {" "}
                  {t("home_header_p5")}
                  <span> {t("home_header_p6")}</span> {t("home_header_p7")}
                </p>
              </div>
            </Fade>

            
          </div>

          <img src={header} alt="Bola" />
        </div>
      </header>
    </>
  );
};

export default Header;
