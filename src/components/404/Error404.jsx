import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Error404() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {  
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <div className="text-center ">
        <h1 className="bg-orange-500 md:w-[50%] m-auto p-5 text-[40px] mt-20 rounded-full font-bold">
          {t("Error")}
        </h1>
        <h1 className="hover:text-blue-500 animate-bounce ">
          <Link to="/Glavnaya">{t("linkError")}</Link>
        </h1>
      </div>
    </div>
  );
}

export default Error404;
