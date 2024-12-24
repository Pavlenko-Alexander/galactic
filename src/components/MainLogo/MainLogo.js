import React from "react";
import logo from "../../images/main-logo.svg";
import mobileLogo from "../../images/main-logo-mobile.svg";
import "./MainLogo.scss";

function MainLogo() {
  return (
    <>
      <img className="main-image" alt="Logo" src={logo} />
      <img className="mobile-image" alt="Logo" src={mobileLogo} />
    </>
  );
}

export default MainLogo;
