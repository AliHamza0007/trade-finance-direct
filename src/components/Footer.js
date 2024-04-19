import React from "react";
import logo from "../assets/logo.webp";
const Footer = () => {
  return (
    <div className="footerBG pt-5 pb-3">
      <div className="text-center">
        <img src={logo} alt="logo" className="footer-logo" />
        <h4 className="fw-bolder  small  my-3">
          Trade Finance <span className="text-custom">Direct</span>
        </h4>{" "}
        <h1 className="fw-bolder fs-4  mb-5">
          Learn and Grow your Global Trade /Finance
        </h1>
        <small className="copyright ">
          Copyright &copy; 2024.Trade Finace Direct .All right Reserved.{" "}
        </small>
      </div>
    </div>
  );
};

export default Footer;
