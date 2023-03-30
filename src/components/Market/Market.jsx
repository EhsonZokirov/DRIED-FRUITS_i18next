import React from "react";
import logoDARK from "../../images/logoDARK.png";
import mehrgon from "../../images/mehrgon.jpg";
import { useTranslation } from "react-i18next";

function Market() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#538DFF0D] space-y-20 py-10">
      <h1 className="font-bold text-center text-[50px]"> {t("Marketme")} </h1>
      <div className="flex flex-wrap gap-10">
        <div className="flex flex-wrap justify-center">
          <div className="m-auto">
            <img className="m-auto rounded-2xl" src={mehrgon} alt="mehrgon" />
          </div>
          <div className="md:w-[45%] m-auto">
            <p className="md:text-[25px]  text-center md:text-start">
              {t("MarketAbout")}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="m-auto">
            <img className="m-auto rounded-2xl" src={mehrgon} alt="mehrgon" />
          </div>
          <div className="md:w-[45%] m-auto">
            <p className="md:text-[25px]  text-center md:text-start">
              {t("MarketAbout")}
            </p>
          </div>
        </div>
      </div>
      <div>
        <img className="m-auto" src={logoDARK} alt="logo DARK" />
      </div>
    </div>
  );
}

export default Market;
