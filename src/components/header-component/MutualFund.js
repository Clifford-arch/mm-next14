"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function MutualFund({ card, imgUrl = "/images/" }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    setCurrentPage(router.pathname);
  }, [router.pathname]);

  const handleRedirect = (url, page) => {
    router.push(url);
    setCurrentPage(page);
  };

  return (
    <li
      className={`top-level-link ${currentPage === "/funds" ? "current" : ""}`}
    >
      <a className="mega-menu mf-logo-menu" href="/">
        <span>
          <img
            className="mf-logo"
            src="https://i.marketsmojo.com/mm-images/mf-logo.png"
            alt=""
          />
          <i className="arrow down"></i>
        </span>
      </a>
      <div className="sub-menu-block">
        <div className="row-wrapper">
          <div className="row-list">
            <div className="nav-content">
              <a href="/">
                <div className="nav-heading">
                  Research
                  <img
                    className="right--arrow"
                    src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                    alt=""
                  />
                </div>
                <div className="nav-subheading">
                  Get top rates Mutual funds to Invest
                </div>
              </a>
            </div>

            <div className="nav-content">
              <a href="/">
                <div className="nav-heading">
                  Top Rated Funds
                  <img
                    className="right--arrow"
                    src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                    alt=""
                  />
                </div>
                <div className="nav-subheading">Discover Mojo rated funds</div>
              </a>
            </div>
            <div className="nav-content">
              <a href="/">
                <div className="nav-heading">
                  Invest Now
                  <img
                    className="right--arrow"
                    src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                    alt=""
                  />
                </div>
                <div className="nav-subheading">
                  Buy Top rated Mutual funds today!
                </div>
              </a>
            </div>
            <div className="nav-content">
              <a href="/">
                <div className="nav-heading">
                  Invest Now
                  <img
                    className="right--arrow"
                    src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                    alt=""
                  />
                </div>
                <div className="nav-subheading">
                  Buy Top rated Mutual funds today!
                </div>
              </a>
            </div>
          </div>
          <div className="row-list">
            <div className="ct_funds_menu_web">
              {" "}
              <div className="nav-content">
                <a href="/">
                  <div className="nav-heading">
                    Order History
                    <img
                      className="right--arrow"
                      src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                      alt=""
                    />
                  </div>
                  <div className="nav-subheading">View your order status</div>
                </a>
              </div>
              <div className="nav-content">
                <a href="/">
                  <div className="nav-heading">
                    My Portfolio
                    <img
                      className="right--arrow"
                      src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                      alt=""
                    />
                  </div>
                  <div className="nav-subheading">
                    Single View of your Holdings
                  </div>
                </a>
              </div>
              <div className="nav-content">
                <a href="/">
                  <div className="nav-heading">
                    Cart
                    <img
                      className="right--arrow"
                      src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                      alt=""
                    />
                  </div>
                  <div className="nav-subheading">
                    Complete your Transactions
                  </div>
                </a>
              </div>
              <div className="nav-content">
                <a href="/">
                  <div className="nav-heading">
                    FAQs
                    <img
                      className="right--arrow"
                      src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                      alt=""
                    />
                  </div>
                  <div className="nav-subheading">
                    Frequently asked questions
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row-list"></div>
        </div>
        <div className="main-overlay"></div>
      </div>
    </li>
  );
}

export default MutualFund;
