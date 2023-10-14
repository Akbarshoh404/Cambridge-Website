import React from "react";
import Flip from "react-reveal/Flip";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

const Section1 = () => {
  const { t } = useTranslation();
  return (
    <section id="Home_sec1">
      <div className="container">
        <p>{t("home_sec1_p1")}</p>
        <p>{t("home_sec1_p2")}</p>

        <Fade right cascade>
          <div className="Home_sec1_grid">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="white"
                className="bi bi-calendar-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>

              <p id="Home_sec1_grid_p1">{t("home_sec1_p3")}</p>
              <p id="Home_sec1_grid_p2">{t("home_sec1_p4")}</p>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="white"
                className="bi bi-calendar-check"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 14.933a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067v13.866zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"
                />
              </svg>

              <p id="Home_sec1_grid_p1">{t("home_sec1_p5")}</p>
              <p id="Home_sec1_grid_p2">{t("home_sec1_p6")}</p>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="white"
                className="bi bi-calendar-check"
                viewBox="0 0 16 16"
              >
                <path d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h5zm1 3V8H2l-.75 1L2 10h6zm0-5h6l.75-1L14 3H8v2z" />
              </svg>

              <p id="Home_sec1_grid_p1">{t("home_sec1_p7")}</p>
              <p id="Home_sec1_grid_p2">{t("home_sec1_p8")}</p>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="white"
                className="bi bi-calendar-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
              </svg>

              <p id="Home_sec1_grid_p1">{t("home_sec1_p9")}</p>
              <p id="Home_sec1_grid_p2">{t("home_sec1_p10")}</p>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="white"
                className="bi bi-calendar-check"
                viewBox="0 0 16 16"
              >
                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
              </svg>

              <p id="Home_sec1_grid_p1">{t("home_sec1_p11")}</p>
              <p id="Home_sec1_grid_p2">{t("home_sec1_p12")}</p>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="white"
                className="bi bi-calendar-check"
                viewBox="0 0 16 16"
              >
                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
              </svg>

              <p id="Home_sec1_grid_p1">{t("home_sec1_p13")}</p>
              <p id="Home_sec1_grid_p2">{t("home_sec1_p14")}</p>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="white"
                className="bi bi-calendar-check"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
              </svg>

              <p id="Home_sec1_grid_p1">{t("home_sec1_p15")}</p>
              <p id="Home_sec1_grid_p2">{t("home_sec1_p16")}</p>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="white"
                className="bi bi-calendar-check"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z" />
              </svg>

              <p id="Home_sec1_grid_p1">{t("home_sec1_p17")}</p>
              <p id="Home_sec1_grid_p2">{t("home_sec1_p18")}</p>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="white"
                className="bi bi-person-rolodex"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z" />
              </svg>

              <p id="Home_sec1_grid_p1">{t("home_sec1_p19")}</p>
              <p id="Home_sec1_grid_p2">{t("home_sec1_p20")}</p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Section1;
