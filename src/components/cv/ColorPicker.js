import React, { useEffect, useState } from 'react';
const documentStyles = document.documentElement.style;

export const ColorPicker = () => {
  const [show, setShow] = useState(false)
  const backgroundPropertyVar = '--main-background';
  const colorPropertyVar = '--main-color';

  const mainBackground = "#2c2c2c";
  const mainColor = "#00c7ac";
  const blueBackground = "#1d335c";
  const whiteColor = "#d8d8d8";

  useEffect(() => {
    if (localStorage.getItem('background')) documentStyles.setProperty(backgroundPropertyVar, localStorage.getItem('background'));
    if (localStorage.getItem('color')) documentStyles.setProperty(colorPropertyVar, localStorage.getItem('color'));
  },[])

  const handleSetGreenTheme = () => {
    documentStyles.setProperty(backgroundPropertyVar, mainBackground);
    documentStyles.setProperty(colorPropertyVar, mainColor);
    localStorage.setItem('background', mainBackground);
    localStorage.setItem('color', mainColor);
    setShow(!show);
  }

  const handleSetBlueTheme = () => {
    documentStyles.setProperty(backgroundPropertyVar, blueBackground);
    documentStyles.setProperty(colorPropertyVar, whiteColor);
    localStorage.setItem('background', blueBackground);
    localStorage.setItem('color', whiteColor);
    setShow(!show);
  }

  const handleSetCustomTheme = (e) => {
    const { value, name } = e.target;

    if(name === "bg") {
      documentStyles.setProperty(backgroundPropertyVar, value);
      localStorage.setItem('background', value);
    } else if (name === "color") {
      documentStyles.setProperty(colorPropertyVar, value);
      localStorage.setItem('color', value);
    }
  }

  return (
    <aside className={`cv_aside ${show && "showAside"}`} id="theme-menu">
      <h4>Themes:</h4>
      <nav className="cv_nav">
        <li>
          <label>Grey - Green</label>
          <button onClick={handleSetGreenTheme}>Apply</button>
        </li>
        <li>
          <label>Blue - White</label>
          <button onClick={handleSetBlueTheme}>Apply</button>
        </li>
        <li>
          <label>Custom BG</label>
          <input name="bg" type="color" id="bg-input" onChange={handleSetCustomTheme} />
        </li>
        <li>
          <label>Custom color</label>
          <input name="color" type="color" id="color-input" onChange={handleSetCustomTheme} />
        </li>
      </nav>
      <button  onClick={() => setShow(!show)} className="toggle-button"> { show ? "<" : ">" } </button>
    </aside>
  )
}
