import React from "react";
import LogoImg from '../../../src/img/logo.png';
import "./LogoStyle.css";

const LogoForecast = () => {
  return (
    <div>
      <img src={LogoImg} alt="ForecastApp-logo" className="logo" />
    </div>
  );
};

export default LogoForecast;
