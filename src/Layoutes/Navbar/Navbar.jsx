import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "rsuite/dist/rsuite.min.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "react-modern-drawer/dist/index.css";
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const { t, i18n } = useTranslation();
  const changelanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const [openWithHeader, setOpenWithHeader] = React.useState(false);

  return (
    <>
      <nav id="nav">
        <div className="container">
          <div>
            <Link to="/">
              <img
                id="nav_logo"
                src="https://cambridgeonline.uz/_nuxt/img/Vector%20(1).c6175a8.png"
                alt="logo"
              />
            </Link>
            <Link to="/course">
              <p id="nav_link1">{t("navbar_p1")}</p>
            </Link>
            <Link to="/team">
              <p id="nav_link1">{t("navbar_p2")}</p>
            </Link>
          </div>

          <FormControl id="dropdown" className="nav_drop">
            <InputLabel id="demo-simple-select-label">
              {t("drop_text")}{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10} onClick={() => changelanguage("ru")}>
                Uzbek
              </MenuItem>
              <MenuItem value={20} onClick={() => changelanguage("en")}>
                English
              </MenuItem>
            </Select>
          </FormControl>
          <div>
            <a href="https://payment.apelsin.uz/merchant?serviceId=1000">
              <button className="btn1" id="nav_link2">
                {t("navbar_p5")}
              </button>
            </a>

            <ButtonToolbar>
              <Button onClick={() => setOpen(true)} id="drawer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </Button>
            </ButtonToolbar>

            <Drawer
              open={open}
              onClose={() => setOpen(false)}
              id="navbar_big_drawer"
            >
              <Drawer.Body>
                <div id="drawer">
                  <Link to="/team">
                    <p>{t("navbar_p2")}</p>
                  </Link>

                  <Link to="/team">
                  <p>{t("navbar_p7")}</p>
                  </Link>

                  <Link to="/course">
                    <p>{t("navbar_p1")}</p>
                  </Link>

                  <Link to="/">
                    <p>{t("navbar_p8")}</p>
                  </Link>

                  <FormControl id="dropdown">
                    <InputLabel id="demo-simple-select-label">
                      {t("drop_text")}{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10} onClick={() => changelanguage("ru")}>
                        Uzbek
                      </MenuItem>
                      <MenuItem value={20} onClick={() => changelanguage("en")}>
                        English
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Drawer.Body>
            </Drawer>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
