import React from "react";
import { useTranslation } from "react-i18next";

const Card = () => {
  const { t, i18n } = useTranslation();
  i18n.changeLanguage;
  return (
    <div>
      <button
        onClick={() => {
          i18n.changeLanguage("az");
        }}
      >
        AZ
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        EN
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("ru");
        }}
      >
        RUS
      </button>
      <h1>{t("title")}</h1>
      <p>{t("ourSales")}</p>
    </div>
  );
};

export default Card;
