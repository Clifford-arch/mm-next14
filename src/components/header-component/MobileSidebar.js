import React, { useState, useEffect } from "react";

const MobileSidebar = ({ isOpen, onClose, currentPage, card }) => {
  const [openMenu, setOpenMenu] = useState(null); // State to manage which submenu is open

  const mobMenuRedirect = (url) => {
    window.location.href = url;
    onClose(); // Close the menu after redirecting
  };

  const toggleSubmenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu); // Toggle the submenu
  };

  // Effect to set the default submenu open based on currentPage
  useEffect(() => {
    if (currentPage === "stocks") {
      setOpenMenu("stocks");
    } else if (currentPage === "markets") {
      setOpenMenu("markets");
    } else if (currentPage === "funds") {
      setOpenMenu("funds");
    } else if (currentPage === "pms") {
      setOpenMenu("pms");
    } else if (currentPage === "global") {
      setOpenMenu("global");
    } else {
      setOpenMenu(null); // Close all menus if none match
    }
  }, [currentPage]); // Dependency array to update whenever `currentPage` changes

  return (
    <>
      <div
        id="mySidepanelleft"
        className={`sidepanelleft ${isOpen ? "side-panel-open" : ""}`}
      >
        <div className="left-sec-top-wrap">
          <div className="left-sec-top-left">
            <img
              src="https://i.marketsmojo.com/mm-images/mm-logo.svg"
              alt="logo"
            />
          </div>
          <div className="left-sec-top-right">
            <a className="closebtnleft" onClick={() => onClose()}>
              <img
                src="https://i.marketsmojo.com/mm-images/mm-close.svg"
                alt="close"
              />
            </a>
          </div>
        </div>

        <div id="mob-lft-menu">
          <ul className="mob-lft-parent-menu">
            <li className={currentPage === "feeds" ? "mob-current" : ""}>
              <a onClick={() => mobMenuRedirect("/")}>Home</a>
            </li>

            {/* Stocks Submenu */}
            <li className={currentPage === "stocks" ? "mob-current" : ""}>
              <a onClick={() => toggleSubmenu("stocks")}>
                Stocks
                <span>
                  <i
                    className={`arrow ${openMenu === "stocks" ? "up" : "down"}`}
                  ></i>
                </span>
              </a>
              <ul className={openMenu === "stocks" ? "firstopen" : ""}>
                <li>
                  <a onClick={() => mobMenuRedirect("/mojostocks")}>
                    Top Mojo Stocks
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/turnaround-companies")}>
                    Hidden Turnarounds
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/reliable-performers")}>
                    Reliable Performers
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/near-term-drivers")}>
                    MomentumNow Stocks
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/stock-of-week")}>
                    Stock of the Week <span className="new_link">NEW</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/stock-of-month")}>
                    Stock of the Month
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/screener")}>Screener</a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/stock-research")}>
                    Stock Research
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/verdict")}>
                    Research Reports
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/switcher")}>
                    Switcher Report
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/trading-calls")}>
                    Trading Calls
                  </a>
                </li>
              </ul>
            </li>

            {/* Markets Submenu */}
            <li className={currentPage === "markets" ? "mob-current" : ""}>
              <a onClick={() => toggleSubmenu("markets")}>
                Markets
                <span>
                  <i
                    className={`arrow ${
                      openMenu === "markets" ? "up" : "down"
                    }`}
                  ></i>
                </span>
              </a>
              <ul className={openMenu === "markets" ? "firstopen" : ""}>
                <li>
                  <a onClick={() => mobMenuRedirect("/markets")}>
                    Markets Today
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/result-corner")}>
                    Earnings
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/news")}>News</a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/ipo")}>IPO</a>
                </li>
              </ul>
            </li>
            {/*Webinar */}
            <li className={currentPage === "webinars" ? "mob-current" : ""}>
              <a onClick={() => toggleSubmenu("webinars")}>
                Webinars
                <span>
                  <i
                    className={`arrow ${
                      openMenu === "webinars" ? "up" : "down"
                    }`}
                  ></i>
                </span>
              </a>
              <ul className={openMenu === "webinars" ? "firstopen" : ""}>
                <li>
                  <a onClick={() => mobMenuRedirect("/markets")}>
                    Upcoming Webinars
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/result-corner")}>
                    Previous Recordings
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/news")}>Blogs</a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/ipo")}>Media Centre</a>
                </li>
              </ul>
            </li>

            {/* Funds Submenu */}
            <li className={currentPage === "funds" ? "mob-current" : ""}>
              <a onClick={() => toggleSubmenu("funds")}>
                <img
                  className="mf-logo"
                  src="https://i.marketsmojo.com/mm-images/mf-logo.png"
                  alt="logo"
                />
                <span>
                  <i
                    className={`arrow ${openMenu === "funds" ? "up" : "down"}`}
                  ></i>
                </span>
              </a>
              <ul className={openMenu === "funds" ? "firstopen" : ""}>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/research")}>
                    Research
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/top-rated")}>
                    Top Rated Funds
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/invest")}>
                    Invest Now
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/portfolio")}>
                    Import Holdings
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/history")}>
                    Order History
                  </a>
                </li>
              </ul>
            </li>
            <li className={currentPage === "pms" ? "mob-current" : ""}>
              <a onClick={() => toggleSubmenu("pms")}>
                <img
                  className="pms-logo"
                  src="https://i.marketsmojo.com/mm-images/Atomic-logo.svg"
                  alt="logo"
                />
                <span>
                  <i
                    className={`arrow ${openMenu === "pms" ? "up" : "down"}`}
                  ></i>
                </span>
              </a>
              <ul className={openMenu === "pms" ? "firstopen" : ""}>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/research")}>
                    Connect with Our Advisors
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/top-rated")}>
                    PMS Offerings
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/invest")}>
                    Investment Philosophy
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/portfolio")}>
                    Group's Proven Heritage
                  </a>
                </li>
              </ul>
            </li>
            <li className={currentPage === "global" ? "mob-current" : ""}>
              <a onClick={() => toggleSubmenu("global")}>
                <img
                  className="mf-logo"
                  src="https://i.marketsmojo.com/mm-images/InFinHub-logo.png"
                  alt="logo"
                />
                <span>
                  <i
                    className={`arrow ${openMenu === "global" ? "up" : "down"}`}
                  ></i>
                </span>
              </a>
              <ul className={openMenu === "global" ? "firstopen" : ""}>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/research")}>
                    Explore International
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/top-rated")}>
                    Countries under coverage
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/invest")}>
                    Stocks to invest
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/portfolio")}>
                    Research Report on all global stocks
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/history")}>
                    Result Corner
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/research")}>
                    Start Global Portfolios
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/top-rated")}>
                    Make your own Screener
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/invest")}>
                    Replace your stocks with top stocks
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/portfolio")}>
                    Portfolio tracker
                  </a>
                </li>
                <li>
                  <a onClick={() => mobMenuRedirect("/mutualfund/history")}>
                    Watchlist
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
