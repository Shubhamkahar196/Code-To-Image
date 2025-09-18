"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { themes } from "../utils/utilities";
import OutsideClickHandler from "react-outside-click-handler";

interface ThemeSelectorProps {
  theme: string;
  setTheme: (theme: string) => void;
}

function ThemeSelector({ theme, setTheme }: ThemeSelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };
  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="theme-selector w-full max-w-[120px]" onClick={toggleDropdown}>
        <p className=" py-[5px] text-sm font-medium">Code Colors</p>
        <div className="dropdown-title capitalize w-full sm:w-[120px] hover:text-slate-50 transition-all duration-300 ease-in-out flex justify-between items-center">
          {theme} <ChevronDown />
        </div>
        {showDropdown && (
          <div className="dropdown-menu relative top-[94px] w-full sm:w-[120px] max-h-60 overflow-auto">
            {themes.map((theme, i) => {
              return (
                <button
                  key={i}
                  onClick={() => handleThemeChange(theme)}
                  className=" capitalize text-left hover:text-slate-50 transition-all duration-300 ease-in-out w-full"
                >
                  {theme}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}

export default ThemeSelector;
