"use client";
import classNames from "classnames";
import { useState } from "react";

const LANGUAGES = [
  { code: "en", name: "en" },
  { code: "ua", name: "ua" },
  { code: "pl", name: "pl" },
];

export default function LanguagePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const showDropdown = () => {
    setIsOpen(true);
  };

  const hideDropdown = () => {
    setIsOpen(false);
  };

  const selectLanguage = (language: any) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div
      className="mr-8"
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <button
        type="button"
        className={classNames(
          "px-4 py-1 text-base",
          isOpen && ["text-gray-500", "hover:text-gray-950"]
        )}
        id="options-menu"
        onClick={toggleDropdown}
      >
        {selectedLanguage.name}
      </button>
      {isOpen && (
        <Dropdown
          selectedLanguage={selectedLanguage}
          selectLanguage={selectLanguage}
        />
      )}
    </div>
  );
}

function Dropdown({ selectedLanguage, selectLanguage }: any) {
  let languages = LANGUAGES.filter((l) => l.code != selectedLanguage.code);
  return (
    <div className="absolute left-0 origin-top-left px-4 py-0">
      <div
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {languages.map((language) => (
          <button
            key={language.code}
            className="block px-4 py-1 pl-0 text-base text-gray-500 hover:text-gray-950"
            role="menuitem"
            onClick={() => selectLanguage(language)}
          >
            {language.name}
          </button>
        ))}
      </div>
    </div>
  );
}
