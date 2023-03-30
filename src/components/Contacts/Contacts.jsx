
import React from "react";
import logoDARK from "../../images/logoDARK.png";

import { useTranslation } from "react-i18next";

function Contacts() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  console.log(changeLanguage());

  return (
    <div className="bg-[#538DFF0D] py-10">
      <h1 className="font-bold text-center text-[50px]"> {t("Contact")} </h1>
      <p className="text-center px-5 md:w-[85%] md:text-[20px] py-20 m-auto ">
      {t("MarketAbout")}
      </p>
      <div>
        <img className="m-auto" src={logoDARK} alt="logo DARK" />
      </div>
    </div>
  );
}

export default Contacts;
