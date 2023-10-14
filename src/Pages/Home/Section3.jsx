import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import Zoom from "react-reveal/Zoom";
import Shake from 'react-reveal/Shake';

const Section3 = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section id="Home_sec3" className="mt-5">
        <Shake>
          <p id="Home_sec3_p1">{t("home_sec3_p1")}</p>
          <p id="Home_sec3_p2">{t("home_sec3_p2")}</p>
          <p id="Home_sec3_p3">{t("home_sec3_p3")}</p>
          <p id="Home_sec3_p2">{t("home_sec3_p4")}</p>
        </Shake>
        <div className="container">
          <Accordion id="acc">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography id="typography1">{t("acc_1")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography id="typography2">{t("acc_2")}</Typography>
            </AccordionDetails>
          </Accordion>{" "}
          <Accordion id="acc">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography id="typography1">{t("acc_3")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography id="typography2">{t("acc_4")}</Typography>
            </AccordionDetails>
          </Accordion>{" "}
          <Accordion id="acc">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography id="typography1">{t("acc_5")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography id="typography2">{t("acc_6")}</Typography>
            </AccordionDetails>
          </Accordion>{" "}
          <Accordion id="acc">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography id="typography1">{t("acc_7")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography id="typography2">{t("acc_8")}</Typography>
            </AccordionDetails>
          </Accordion>{" "}
          <Accordion id="acc">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography id="typography1">{t("acc_9")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography id="typography2">{t("acc_10")}</Typography>
            </AccordionDetails>
          </Accordion>{" "}
          <Accordion id="acc">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography id="typography1">{t("acc_11")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography id="typography2">{t("acc_12")}</Typography>
            </AccordionDetails>
          </Accordion>{" "}
          <Accordion id="acc">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography id="typography1">{t("acc_13")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography id="typography2">{t("acc_14")}</Typography>
            </AccordionDetails>
          </Accordion>{" "}
          <Accordion id="acc">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography id="typography1">{t("acc_15")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography id="typography2">{t("acc_16")}</Typography>
            </AccordionDetails>
          </Accordion>{" "}
          <Accordion id="acc">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography id="typography1">{t("acc_17")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography id="typography2">{t("acc_8")}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Section3;
