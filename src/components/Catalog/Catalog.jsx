import { Button, InputBase, Paper } from "@mui/material";
import React from "react";
import oneTwo from "../../images/oneTwoThree.png";
import SearchIcon from "@mui/icons-material/Search";
import CardNuts from "../Glavnaya/CardNuts";

import { useTranslation } from "react-i18next";

function Catalog() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <h1 className="font-bold text-center text-[50px] my-10">
        {t("catalog")}
      </h1>
      {/* <div></div> */}
      <div className="flex flex-wrap md:flex-nowrap w-[90%] m-auto my-20 gap-10">
        {/*  */}
        <div className="md:w-[30%] m-auto md:m-0">
          <div>
            <ul className=" bg-[#538DFF0D] rounded-3xl p-5">
              <li className="font-bold text-[30px]">{t("catalog")}</li>
              <li className="hover:bg-[#FEB302] hover:text-white p-2 cursor-pointer rounded-lg">
                {t("ExoticFruits")}
              </li>
              <li className="bg-[#FEB302] text-white p-2 rounded-lg">
                {t("Berries")}
              </li>
              <li className="hover:bg-[#FEB302] hover:text-white p-2 cursor-pointer rounded-lg">
                {t("Candied fruit")}
              </li>
              <li className="hover:bg-[#FEB302] hover:text-white p-2 cursor-pointer rounded-lg">
                {t("Orientalsweets")}
              </li>
              <li className="hover:bg-[#FEB302] hover:text-white p-2 cursor-pointer rounded-lg">
                {t("Snacks")}
              </li>
              <li className="hover:bg-[#FEB302] hover:text-white p-2 cursor-pointer rounded-lg">
              {t("Candied fruit")}
              </li>
              <li className="hover:bg-[#FEB302] hover:text-white p-2 cursor-pointer rounded-lg">
              {t("ExoticFruits")}
              </li>
              <li className="hover:bg-[#FEB302] hover:text-white p-2 cursor-pointer rounded-lg">
                {t("Berries")}
              </li>
              <li className="hover:bg-[#FEB302] hover:text-white p-2 cursor-pointer rounded-lg">
                {t("Orientalsweets")}
              </li>
              <li className="hover:bg-[#FEB302] hover:text-white p-2 cursor-pointer rounded-lg">
                {t("Grocery")}
              </li>
              <li className="hover:bg-[#FEB302] hover:text-white p-2 cursor-pointer rounded-lg">
              {t("Snacks")}
              </li>
              <li className="hover:bg-[#FEB302] hover:text-white p-2 cursor-pointer rounded-lg">
              {t("Berries")}
              </li>
            </ul>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="grid md:grid-cols-4">
            <div className="col-span-3">
              <img
                className="m-auto w-[50%] md:m-0 md:my-10 md:w-[30%]"
                src={oneTwo}
                alt="oneTwo"
              />
            </div>
            <div>
              <div className="hidden md:flex">
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
                    sx={{ ml: 1, flex: 1, width: "100%" }}
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
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <CardNuts />
            <CardNuts />
            <CardNuts />
            <CardNuts />
            <CardNuts />
            <CardNuts />
            <CardNuts />
            <CardNuts />
            <CardNuts />
            <CardNuts />
            <CardNuts />
            <CardNuts />
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
}

export default Catalog;
