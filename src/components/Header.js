import React from "react";
import logo from "../assets/logo.webp";
const Header = () => {
  return (
    <div className="headerBG g-0">
      {" "}
      <div
        className="container py-md-1 py-2
        "
      >
        <div className="d-flex justify-content-md-between  justify-content-center align-items-center">
          <div>
            <div className="fw-bolder    text-white">
              <img className="img-fluid logo me-1" src={logo} alt=""></img>
              Trade Finance <span className="text-custom">Direct</span>
            </div>{" "}
          </div>
          <div>
            <button className=" btn btn-contact bg-custom  text-white fw-fw-semibold  d-md-block d-none rounded-1">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="border-bottom border-light"></div>{" "}
      <div className="container h-100 w-100 py-5">
        <div className="py-5 ">
          <h1 className="header-h1 text-white">
            Your 24/7 Mentor
            <br className="" />
            For GlobalTrade
            <br className="" />
            Transaction!
          </h1>
          <p className="text-white header-p-w">
            Secure your retirement and Financial freedom .Focus on the Largest
            Buy/Sell transactions of High Finance that can truly change your
            life!{" "}
          </p>
          <button className="btn  my-3 rounded-2 text-white fw-semibold  px-4 py-2 btn-custom-green">
            Learn and Grow your Global Traded /Finance Buy Sell Business
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
