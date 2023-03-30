import React from "react";
import logoDARK from "../../images/logoDARK.png";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#538DFF0D] py-10">
      <h1 className="font-bold text-center text-[50px]"> {t("About")} </h1>
      <p className="text-center px-5 md:w-[85%] md:text-[20px] py-20 m-auto ">
        {t("oAbout")}
      </p>
      <div>
        <img className="m-auto" src={logoDARK} alt="logo DARK" />
      </div>
    </div>
  );
}

export default About;
