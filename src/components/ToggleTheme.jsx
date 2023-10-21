import React, { useEffect, useState } from "react";
import "../css/Toggle.css";

function ToggleTheme() {
  // Function to get the theme from local storage or default to 'light'
  const getTheme = () => {
    return localStorage.getItem('theme') || 'light';
  };

  const [isChecked, setIsChecked] = useState(getTheme() === 'dark');

  // Function to set the theme and save it to local storage
  const setTheme = (theme) => {
    localStorage.setItem('theme', theme ? 'dark' : 'light');
    setIsChecked(theme);
    updateThemeClass(theme);
  };

  // Function to handle the toggle change
  const handleChange = () => {
    setTheme(!isChecked); // Toggle the theme
  };

  // Function to update the theme class on the document element
  const updateThemeClass = (isDarkTheme) => {
    document.documentElement.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  };

  useEffect(() => {
    updateThemeClass(isChecked); // Set the theme class on component mount
  }, [isChecked]);

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check"></label>
    </div>
  );
}

export default ToggleTheme;
