import React from "react";

function HamburgerMenu() {
  return (
    <button
      className="nav-toggle"
      onClick={(e) => {
        e.currentTarget.classList.toggle("opened");
        // const element = e.currentTarget.previousElementSibling;

        // const cStyle = getComputedStyle(element);

        // const height = cStyle.getPropertyValue("height");

        // if (height === "0px") {
        //   element.style.height = "50%";
        // } else {
        //   element.style.height = "0";
        // }

        e.currentTarget.previousElementSibling.classList.toggle("OpenMenu");
      }}
    >
      <span className="bar-top"></span>
      <span className="bar-mid"></span>
      <span className="bar-bot"></span>
    </button>
  );
}

export default HamburgerMenu;
