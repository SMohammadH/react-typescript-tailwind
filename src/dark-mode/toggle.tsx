import React from 'react';
import { ThemeContext } from './themeContext';
import './toggle.css';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';

export const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  console.log(theme);

  const isDark = () => {
    return theme === 'dark';
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="ml-3 font-medium mr-3">
        {theme === 'light' ? (
          <FaSun className="text-yellow-100 text-2xl" />
        ) : (
          <FaSun className="text-gray-400" />
        )}
      </div>
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={isDark()}
          onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
        />
        <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
      </div>

      <div className="ml-3 ">
        {theme === 'light' ? (
          <FaMoon className="text-gray-400" />
        ) : (
          <FaMoon className="text-blue-100 text-xl" />
        )}
      </div>
    </label>
  );
};
