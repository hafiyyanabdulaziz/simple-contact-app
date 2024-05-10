import React from "react";
import SettingIcon from "../../assets/icons/SettingIcon";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

const Drawer = () => {
  return (
    <div className='drawer z-50'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <label htmlFor='my-drawer' className='btn btn-ghost btn-circle'>
          <SettingIcon />
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
          {themes.map((theme, index) => {
            return (
              <li>
                <input
                  type='radio'
                  name='theme-dropdown'
                  className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                  aria-label={theme}
                  value={theme}
                  onChange={() => localStorage.setItem("theme", theme)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
