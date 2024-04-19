import React from "react";
import oImg1 from "../assets/GoldonDollars.jpg";
import of1 from "../assets/offer-card1.webp";
import of2 from "../assets/offer-card2.jpg";
const Offer = () => {
  return (
    <>
      <div className="container">
        {/* offer row heading */}
        <div className="row py-5 text-center flex align-items-center justify-content-center">
          <h1 className="fw-bolder  fs-1 ">
            <strong>What do We Offer ?</strong>{" "}
          </h1>
          <div className=" border-b "></div>
        </div>

        {/* detail offer cards */}
        <div className="row ">
          <div className="col-md-6 col-12 card-parent">
            <div className="position-relative px-lg-3 ">
              <img className="img-fluid w-100 of-image" src={of1} alt={of1} />
              <div className="position-absolute  offer-card">
                <div className="bg-white shadow  p-4 text-custom fw-semibold fs-6 d-flex align-items-center">
                  Training and Consulting for entrepreneurs brokers and
                  companies who like to learn the Global Trade/buy Sell Market
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 card-parent">
            <div className="position-relative px-lg-3 ">
              <img className="img-fluid w-100 of-image" src={of2} alt={of2} />
              <div className="position-absolute  offer-card">
                <div className="bg-white shadow  p-4 text-custom fw-semibold fs-6 d-flex align-items-center">
                  Full Training from A to Z on the business including documents,
                  contracts, setup, tools, etc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details include etc */}

      <div className="overflow-hidden  py-lg-5">
        <div className="container py-lg-5 ">
          <div className="row  py-md-5 gap-md-0 gap-4">
            <div className="col-md-6 col-12">
              <div className="py-4">
                <h1 className="fw-bolder ">This Includes:</h1>

                <div className="offer-list">
                  <ul className="list-unstyled  ">
                    <li className="d-flex gap-2">
                      <div>
                        {" "}
                        <i className="fa fa-check  rounded-circle p-1 small "></i>
                      </div>{" "}
                      Essential legal material
                    </li>
                    <li className="d-flex gap-2">
                      {" "}
                      <div>
                        {" "}
                        <i className="fa fa-check  rounded-circle p-1 small "></i>
                      </div>{" "}
                      Business operations documents
                    </li>
                    <li className="d-flex gap-2">
                      {" "}
                      <div>
                        {" "}
                        <i className="fa fa-check  rounded-circle p-1 small "></i>
                      </div>{" "}
                      Inside information on the business
                    </li>
                    <li className="d-flex gap-2">
                      {" "}
                      <div>
                        {" "}
                        <i className="fa fa-check  rounded-circle p-1 small "></i>
                      </div>{" "}
                      An Optional marketing/Deal Direct Software Not Required !
                      Free Upgrade for Licensed Owners!
                    </li>
                    <li className="d-flex gap-2">
                      {" "}
                      <div>
                        {" "}
                        <i className="fa fa-check  rounded-circle p-1 small "></i>
                      </div>{" "}
                      Full and complete marketing plan that works!
                    </li>
                    <li className="d-flex gap-2">
                      {" "}
                      <div>
                        {" "}
                        <i className="fa fa-check  rounded-circle p-1 small "></i>
                      </div>{" "}
                      We have tremendous experience and will teach you he
                      fastest methods to close these monster deals quickly and
                      efficiently~
                    </li>
                    <li className="d-flex gap-2 ">
                      {" "}
                      <div>
                        <i className="fa fa-check  rounded-circle p-1 small "></i>
                      </div>
                      Full API for a transaction engine hat will run site like
                      an Affiliate of our Buy/Sell infrastructure.
                      <span className="text-custom text-uppercase d-inline">
                        Optional
                      </span>
                    </li>
                    <li className="d-flex gap-2">
                      {" "}
                      <div>
                        {" "}
                        <i className="fa fa-check  rounded-circle p-1 small "></i>
                      </div>{" "}
                      Lifetime upgrades included!
                    </li>
                    <li className="d-flex gap-2">
                      {" "}
                      <div>
                        {" "}
                        <i className="fa fa-check  rounded-circle p-1 small "></i>
                      </div>{" "}
                      You can start closing deals right after training .{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12  include-image">
              <img className="img-fluid h-100   w-100" src={oImg1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
