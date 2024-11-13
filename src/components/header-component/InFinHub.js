import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function InFinHub({ card, imgUrl = "/images/" }) {
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
      <a className="mega-menu infinhub-logo-menu" href="/">
        <span>
          <img
            className="infinhub-logo"
            src="https://i.marketsmojo.com/mm-images/InFinHub-logo.png"
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
                  Explore International
                  <img
                    className="right--arrow"
                    src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                    alt=""
                  />
                </div>
                <div className="nav-subheading">
                  Your Gateway to Global Prosperity
                </div>
              </a>
            </div>

            <div className="nav-content">
              <a href="/">
                <div className="nav-heading">
                  Global Stock Recommendations
                  <img
                    className="right--arrow"
                    src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                    alt=""
                  />
                </div>
                <div className="nav-subheading">
                  Buy, Sell, or Hold across Global Stocks
                </div>
              </a>
            </div>
            <div className="nav-content">
              <a href="/">
                <div className="nav-heading">
                  Countries under coverage
                  <img
                    className="right--arrow"
                    src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                    alt=""
                  />
                </div>
                <div className="nav-subheading">
                  Worldwide opportunities: 21 global markets
                </div>
              </a>
            </div>
            <div className="nav-content">
              <a href="/">
                <div className="nav-heading">
                  Stocks to invest
                  <img
                    className="right--arrow"
                    src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                    alt=""
                  />
                </div>
                <div className="nav-subheading">
                  Boost Your Wealth with Global Stocks
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
                    Research Report on all global stocks
                    <img
                      className="right--arrow"
                      src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                      alt=""
                    />
                  </div>
                  <div className="nav-subheading">
                    Stock Insights with Real-time Research Reports
                  </div>
                </a>
              </div>
              <div className="nav-content">
                <a href="/">
                  <div className="nav-heading">
                    Result Corner
                    <img
                      className="right--arrow"
                      src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                      alt=""
                    />
                  </div>
                  <div className="nav-subheading">
                    Company Results and Financial Trend
                  </div>
                </a>
              </div>
              <div className="nav-content">
                <a href="/">
                  <div className="nav-heading">
                    Start Global Portfolios
                    <img
                      className="right--arrow"
                      src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                      alt=""
                    />
                  </div>
                  <div className="nav-subheading">
                    Zero Headache Global Portfolios
                  </div>
                </a>
              </div>
              <div className="nav-content">
                <a href="/">
                  <div className="nav-heading">
                    Make your own Screener
                    <img
                      className="right--arrow"
                      src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                      alt=""
                    />
                  </div>
                  <div className="nav-subheading">
                    Screener & Find the Right Stocks to Invest
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row-list">
            <div className="nav-content">
              <a href="/">
                <div className="nav-heading">
                  Replace your stocks with Mojo stocks
                  <img
                    className="right--arrow"
                    src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                    alt=""
                  />
                </div>
                <div className="nav-subheading">
                  Drop the Duds: Switch to Global Stocks
                </div>
              </a>
            </div>
            <div className="nav-content">
              <a href="/">
                <div className="nav-heading">
                  Portfolio tracker
                  <img
                    className="right--arrow"
                    src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                    alt=""
                  />
                </div>
                <div className="nav-subheading">
                  Stay Ahead with Real-Time Stock Tracking
                </div>
              </a>
            </div>
            <div className="nav-content">
              <a href="/">
                <div className="nav-heading">
                  Watchlist
                  <img
                    className="right--arrow"
                    src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                    alt=""
                  />
                </div>
                <div className="nav-subheading">Your Stock favourites</div>
              </a>
            </div>
          </div>
        </div>
        <div className="main-overlay"></div>
      </div>
    </li>
  );
}

export default InFinHub;
