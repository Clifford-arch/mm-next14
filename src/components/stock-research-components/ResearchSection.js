"use client";
import { useState } from "react";

const ResearchSection = ({
  isPaid = false,
  isLogin = false,
  is_clmm = false,
  page_name = "",
  IMG_URL = "/images/",
}) => {
  //   const video_popup_open = (popup, type) => {
  //     // Implement your popup logic here
  //   };

  return (
    <div className="row">
      <div className="col-md-7 col-sm-6">
        <p className="mojohead2">
          NO MORE INVESTING BLINDLY,
          <br />
          WITHOUT RESEARCH.
        </p>
        <p className="mojohead222">
          Most investors lose money investing in a tip without getting convinced
          about the strength of the stock. Never invest in a stock until you
          know all about that stock. We analyze everything and give you a SCORE
          on that stock.
        </p>
        <div className="bullet_cio">
          <ul>
            <li>A score with buy/sell/hold call on all stocks</li>
            <li>Coverage on ALL listed stocks on BSE and NSE </li>
          </ul>
        </div>

        <div className="mojobuttonbanner">
          <div className="mojobuttoncontent">
            <div onClick="getStarted()" className="paybuttonconetnt">
              <a href="/">GET STARTED</a>
            </div>
          </div>
        </div>

        {/* <div
          className="viewdemobutton no-web no-tab no-tab2"
          onClick={() => video_popup_open("youtube_popup", "youtube_popup")}
        >
          VIEW DEMO{" "}
          <span>
            <i className="fa fa-play viewdemobuttonicon"></i>
          </span>
        </div> */}
      </div>

      <div className="col-md-5 col-sm-6 no-mob">
        {/* {!isPaid && ( */}
        <div className="opthome1">
          <img
            src="https://i.marketsmojo.com/mojoprofessional/score-banner.png"
            className="w-100"
          />
        </div>
        {/* // )}
        {isPaid && (
          <div className="opthome1">
            <img src={`${IMG_URL}mojoprofessional/score-banner.png`} />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ResearchSection;
