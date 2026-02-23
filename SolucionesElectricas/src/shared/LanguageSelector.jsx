import React from "react";
import { Menu, MenuHandler, MenuList, MenuItem, IconButton } from "@material-tailwind/react";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { isDarkMode } = useTheme();
  const { i18n } = useTranslation();

  const languages = [
    { code: "es", flag: "🇨🇷", name: "Español" },
    { code: "en", flag: "🇺🇸", name: "English" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    // Guardar en localStorage
    localStorage.setItem('language', langCode);
  };

  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <IconButton
          variant="text"
          className={`text-2xl transition-all duration-300 rounded-full ${
            isDarkMode ? "text-dark-text hover:bg-dark-bg-tertiary" : "text-light-text hover:bg-light-bg-tertiary"
          }`}
        >
          {currentLanguage.flag}
        </IconButton>
      </MenuHandler>
      <MenuList
        className={`border-0 min-w-[120px] transition-all duration-300 ${
          isDarkMode
            ? "bg-dark-bg-secondary text-dark-text shadow-lg"
            : "bg-light-bg-secondary text-light-text shadow-md"
        }`}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex items-center gap-2 transition-all duration-300 ${
              i18n.language === lang.code
                ? isDarkMode
                  ? "bg-dark-bg-tertiary"
                  : "bg-light-bg-tertiary"
                : ""
            } ${
              isDarkMode
                ? "hover:bg-dark-bg-tertiary text-dark-text"
                : "hover:bg-light-bg-tertiary text-light-text"
            }`}
          >
            <span className="text-xl">{lang.flag}</span>
            <span className="text-sm">{lang.name}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSelector;
