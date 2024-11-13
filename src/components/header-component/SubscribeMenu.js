import React from "react";

const SubscribeMenu = ({ isPaid = "", noOfDaysRemaining }) => {
  return (
    <div className="subscribe-menu">
      <a className="nav-btn-black" href="/">
        {isPaid ? "Extend Now" : "Premium"}
      </a>

      {/* Subscription information based on `isPaid` and `noOfDaysRemaining` */}
      {isPaid && noOfDaysRemaining <= 30 && noOfDaysRemaining > 0 && (
        <div className="subscrip-txt">
          Premium access ends in {noOfDaysRemaining}{" "}
          {noOfDaysRemaining === 1 ? "day" : "days"}
        </div>
      )}
      {isPaid && noOfDaysRemaining === 0 && (
        <div className="subscrip-txt">Premium access ends today</div>
      )}
    </div>
  );
};

export default SubscribeMenu;
