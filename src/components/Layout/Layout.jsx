import { Email, Language, Phone } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";
import { Outlet } from "react-router";
import { Nav, NavLink, NavLinkLinkNavLink } from "react-router-dom";
import logo from "../../images/logo.png";

import { useTranslation } from "react-i18next";

function Layout() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <header>
        <nav className="md:grid gap-5 flex flex-wrap md:grid-cols-2 items-center p-5 bg-[#538DFF0D]">
          <li className="flex lg:hidden gap-2 m-auto md:m-0">
            <img src={logo} alt="logo" />
          </li>
          <ul className="hidden lg:flex  m-auto items-center md:gap-5 ">
            <li className="flex gap-2">
              <img src={logo} alt="logo" />
            </li>
            <NavLink
              className="hover:text-orange-500 active:text-black"
              to="/Glavnaya"
            >
              {t("home")}
            </NavLink>
            <NavLink
              className="hover:text-orange-500 active:text-black"
              to="/Catalog"
            >
              {t("catalog")}
            </NavLink>
            <NavLink
              className="hover:text-orange-500 active:text-black"
              to="/About"
            >
              {t("About")}
            </NavLink>
            <NavLink
              className="hover:text-orange-500 active:text-black"
              to="/Delivery"
            >
              {t("Delivery")}
            </NavLink>
            <NavLink
              className="hover:text-orange-500 active:text-black"
              to="/Market"
            >
              {t("Market")}
            </NavLink>
            <NavLink
              className="hover:text-orange-500 active:text-black"
              to="/Contacts"
            >
              {t("Contact")}
            </NavLink>
          </ul>
          <ul className="flex m-auto gap-5 items-center">
            <li>
              <Phone /> +7 (900) 232 32-32
            </li>
            <li className="hidden lg:flex"> {t("Favorites")}</li>
            {/* <Language /> */}
            <select
              onChange={(e) => {
                changeLanguage(e.target.value);
              }}
              name=""
              id=""
              className="p-2 bg-[#feb202c3] hover:bg-[#e1a210] outline-none rounded-lg text-white"
            >
              <option
                onChange={() => changeLanguage("Ru")}
                className="bg-[#feb202c3]"
                value="Ru"
              >
                Ru
              </option>
              <option
                onChange={() => changeLanguage("En")}
                className="bg-[#feb202c3]"
                value="En"
              >
                En
              </option>
              <option
                onChange={() => changeLanguage("Tj")}
                className="bg-[#feb202c3]"
                value="Tj"
              >
                Tj
              </option>
            </select>
            <button className="bg-[#feb202c3] hover:bg-[#d0950e] hidden lg:flex font-bold items-center text-white px-5 py-2 rounded-lg">
              {t("Basket")}
              <span className="bg-[#FFFFFF] m-1 text-black px-2 py-[1px] rounded-full">
                3
              </span>
            </button>
          </ul>
        </nav>
      </header>
      <Outlet />
      <nav className="md:grid my-20 md:flex flex-wrap md:grid-cols-2 items-center p-5 hidden ">
        <ul className="hidden lg:flex  m-auto items-center md:gap-5 ">
          <NavLink
            className="hover:text-orange-500 active:text-black"
            to="/Glavnaya"
          >
            {t("home")}
          </NavLink>
          <NavLink
            className="hover:text-orange-500 active:text-black"
            to="/Catalog"
          >
            {t("catalog")}
          </NavLink>
          <NavLink className="hover:text-orange-500 active:text-black" to="/About">
            {t("About")}
          </NavLink>
          <NavLink
            className="hover:text-orange-500 active:text-black"
            to="/Delivery"
          >
            {t("Delivery")}
          </NavLink>
          <NavLink className="hover:text-orange-500 active:text-black" to="/Market">
            {t("Market")}
          </NavLink>
          <NavLink
            className="hover:text-orange-500 active:text-black"
            to="/Contacts"
          >
            {t("Contact")}
          </NavLink>
        </ul>
        <ul className="flex m-auto gap-5 items-center">
          <li className="hidden lg:flex"> {t("Favorites")}</li>

          <button className="bg-[#feb202c3] hidden lg:flex font-bold items-center text-white px-5 py-2 rounded-lg">
            {t("Basket")}
          </button>
        </ul>
      </nav>
      <hr />
      <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-auto gap-10 ">
        <ul className="m-auto hidden md:block">
          <h1 className="font-bold text-[20px]">{t("sections")} 1</h1>
          <hr className=" my-2 border-[1px solid] rounded-full w-[30%] bg-black p-[2px]" />
          <li>{t("Driedberries")}</li>
          <li>{t("Orientalsweets")}</li>
          <li>{t("Berries")}</li>
          <li>{t("Candied fruit")}</li>
          <li> {t("ExoticFruits")}</li>
        </ul>
        <ul className="m-auto hidden md:block">
          <h1 className="font-bold text-[20px]">{t("sections")} 2</h1>
          <hr className=" my-2 border-[1px solid] rounded-full w-[30%] bg-black p-[2px]" />
          <li>{t("Driedberries")}</li>
          <li>{t("Orientalsweets")}</li>
          <li>{t("Berries")}</li>
          <li>{t("Candied fruit")}</li>
          <li> {t("ExoticFruits")}</li>
        </ul>
        <ul className="m-auto hidden md:block">
          <h1 className="font-bold text-[20px]">{t("sections")} 3</h1>
          <hr className=" my-2 border-[1px solid] rounded-full w-[30%] bg-black p-[2px]" />
          <li>{t("Driedberries")}</li>
          <li>{t("Orientalsweets")}</li>
          <li>{t("Berries")}</li>
          <li>{t("Candied fruit")}</li>
          <li> {t("ExoticFruits")}</li>
        </ul>

        <ul className="m-auto font-bold">
          <h1 className="font-bold md:text-start text-center text-[20px]">
          {t("Contact")}
          </h1>
          <hr className=" my-2 border-[1px solid] rounded-full md:m-0 m-auto w-[30%] bg-black p-[2px]" />
          <li className="flex gap-2 md:justify-start justify-center">
            <Phone /> 8 993 313 31 33
          </li>
          <li className="flex gap-2 md:justify-start justify-center">
            <Phone /> 8 993 313 31 33
          </li>
          <li className="flex gap-2 md:justify-start justify-center">
            <Email /> Sychofrycti@Gmail.com
          </li>
          <div className="flex">
            <li className="flex gap-2 md:m-0 m-auto md:justify-start justify-center">
              <LocationOnIcon />
            </li>
            <li className="md:w-[60%] ">
              {t("Adress")}
            </li>
          </div>
        </ul>
      </footer>
    </div>
  );
}

export default Layout;
