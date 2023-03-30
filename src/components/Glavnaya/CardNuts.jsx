import React from "react";
import abricos from "../../images/абрикосиКок.png";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTranslation } from "react-i18next";
function CardNuts() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  console.log(changeLanguage());
  return (
    <div>
      <div className="bg-[#F6F9FF] space-y-5 p-5 m-auto rounded-xl">
        <img className="rounded-r-3xl m-auto" src={abricos} alt="abricos" />
        <h1 className="font-bold text-[20px]">{t("Berries")}</h1>
        <p>{t("pCard")}</p>
        <p className="flex gap-5">
          <span className="text-[#DA5C5C]">От 322.00 Р</span>
          <span className="text-slate-400 line-through ">От 450.00 Р</span>
        </p>
        <div className="flex justify-evenly items-center">
          <CompareArrowsIcon /> <SearchIcon /> <FavoriteIcon color="warning" />
          <button className="bg-[#FEB302] hover:bg-[#d89c11] active:bg-[#FEB302] px-5 py-2 rounded-lg text-white">
            {t("Basket")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardNuts;
