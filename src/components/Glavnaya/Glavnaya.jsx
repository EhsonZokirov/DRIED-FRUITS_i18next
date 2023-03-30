import React from "react";
import nuts from "../../images/nuts.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import CardNuts from "./CardNuts";
// import { useState } from "react";
import { useTranslation } from "react-i18next";

function Glavnaya() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      {/* section 1 */}
      <section className="bg-[#538DFF0D] py-20">
        <div className="grid md:grid-cols-2 md:w-[80%] m-auto ">
          <div className="">
            {/* <img className="w-[80%] m-auto" src={nadpis} alt="nadpis" /> */}
            <h1 className="text-[150px] font-extralight">
              <span className="text-[#BC5D1D]">{t("Dri")}</span>
              {t("ed")} <span className="font-bold">{t("Fruits")}</span>
            </h1>
            <p className="text-[20px] w-[85%] m-auto font-extralight text-slate-400 py-10">
              {t("Lorem")}
            </p>
            <div className="w-[80%] md:w-[90%] mb-10 m-auto">
              <Paper
                component="form"
                sx={{
                  // mx: "5px 40px",
                  p: "0px 0px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder={t("Search")}
                  inputProps={{ "aria-label": "Кешью Австралийский " }}
                />
                <Button
                  type="button"
                  sx={{ p: "10px", bgcolor: "#feb202c3" }}
                  aria-label="search"
                >
                  <SearchIcon color="action" />
                </Button>
              </Paper>
            </div>
          </div>
          <div className="">
            <img className="w-[80%] m-auto" src={nuts} alt="nuts" />
          </div>
        </div>
      </section>
      {/* section 1 */}
      {/* section 2 */}
      <section className="my-10">
        <h1 className="text-[30px] md:text-[40px] text-center font-bold ">
          {t("Our range")}
        </h1>
        <ul className="grid gap-5 sm:grid-cols-3 md:grid-cols-7 m-auto w-[90%] my-10">
          <li className="m-auto hover:text-slate-400 active:text-black cursor-pointer">
            {t("ExoticFruits")}
          </li>
          <li className="m-auto hover:text-slate-900 active:text-black cursor-pointer  bg-[#FEB302] px-5 py-2  rounded-xl text-white ">
            {t("Berries")}
          </li>
          <li className="m-auto hover:text-slate-400 active:text-black cursor-pointer ">
            {t("Driedberries")}
          </li>
          <li className="m-auto hover:text-slate-400 active:text-black cursor-pointer">
            {t("Orientalsweets")}
          </li>
          <li className="m-auto hover:text-slate-400 active:text-black cursor-pointer">
            {t("Snacks")}
          </li>
          <li className="m-auto hover:text-slate-400 active:text-black cursor-pointer">
            {t("Candied fruit")}
          </li>
          <li className="m-auto hover:text-slate-400 active:text-black cursor-pointer">
            {t("Grocery")}
          </li>
        </ul>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 w-[90%] m-auto">
          <CardNuts />
          <CardNuts />
          <CardNuts />
          <CardNuts />
          <CardNuts />
          <CardNuts />
          <CardNuts />
          <CardNuts />
        </div>
      </section>
      {/* section 2 */}
    </div>
  );
}

export default Glavnaya;
