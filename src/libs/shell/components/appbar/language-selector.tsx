/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Select, MenuItem } from "@mui/material";
import { languages } from "../../../localisations/model/language";
const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleChangeLanguage = (event: any) => {
    window.location.reload();
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("local", newLanguage);
  };

  return (
    <Select
      value={selectedLanguage}
      onChange={handleChangeLanguage}
      sx={{
        fontSize: "20px",
        fontWeight: 500,
        color: "#000000",
        height: "40px",
      }}
    >
      {Object.keys(languages)?.map((key) => (
        <MenuItem key={key} value={key} disabled={key === selectedLanguage}>
          {languages[key]}
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageSelector;
