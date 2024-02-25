import React, { useContext } from 'react';
import { useEffect } from 'react';
import  { ThemeContext }  from './ThemeContext';

function ContentComponent() {
  const isDarkTheme = useContext(ThemeContext);

  useEffect(() => {
    alert(`Theme is ${isDarkTheme ? 'dark' : 'light'}`);
  }, [isDarkTheme]);

  const themeStyle = {
    backgroundColor: isDarkTheme ? "black" : "white",
    color: isDarkTheme ? "white" : "black",
    padding: "2rem",
    margin: "2rem"
  }

  return (
    <div style={themeStyle}>
      content component is working
    </div>
  );
}

export default ContentComponent;