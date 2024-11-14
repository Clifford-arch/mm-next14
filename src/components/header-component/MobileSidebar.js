import React, { useState } from "react";

const MobileSidebar = ({ imgUrl, logo_img }) => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [menushow, setMenushow] = useState(true);

  const openMobMenu = () => {
    setIsMobMenuOpen(true);
  };

  const closeMobMenu = () => {
    setIsMobMenuOpen(false);
  };

  const mobMenuRedirect = (url) => {
    // Handle navigation
    window.location.href = url;
    closeMobMenu();
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="openbtnleft" onClick={openMobMenu}>
        <img
          src="https://i.marketsmojo.com/mm-images/mobile-hamburger.svg"
          alt="hamburger"
        />
      </button>

      {/* Sidebar */}
      <div
        id="mySidepanelleft"
        className={`sidepanelleft ${isMobMenuOpen ? "side-panel-open" : ""}`}
      >
        <div className="left-sec-top-wrap">
          <div className="left-sec-top-left">
            <img
              src="https://i.marketsmojo.com/mm-images/mm-logo.svg"
              alt="logo"
            />
          </div>
          <div className="left-sec-top-right">
            <a className="closebtnleft" onClick={closeMobMenu}>
              <img
                src="https://i.marketsmojo.com/mm-images/mm-close.svg"
                alt="close"
              />
            </a>
          </div>
        </div>

        {!menushow && <div className="mob-lft-menu" />}

        {menushow && (
          <div id="mob-lft-menu">
            <ul className="mob-lft-parent-menu">
              <li className={currentPage === "feeds" ? "mob-current" : ""}>
                <a onClick={() => mobMenuRedirect("/")}>Home</a>
              </li>

              <li className={currentPage === "stocks" ? "mob-current" : ""}>
                <a>
                  Stocks
                  <span>
                    <i className="arrow down"></i>
                  </span>
                </a>
                <ul className={currentPage === "stocks" ? "firstopen" : ""}>
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

              <li className={currentPage === "markets" ? "mob-current" : ""}>
                <a>
                  Markets
                  <span>
                    <i className="arrow down"></i>
                  </span>
                </a>
                <ul className={currentPage === "markets" ? "firstopen" : ""}>
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

              <li className={currentPage === "funds" ? "mob-current" : ""}>
                <a>
                  <img
                    className="mf-logo"
                    src="https://i.marketsmojo.com/mm-images/mf-logo.png"
                    alt="logo"
                  />
                  <span>
                    <i className="arrow down"></i>
                  </span>
                </a>
                <ul className={currentPage === "funds" ? "firstopen" : ""}>
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
              <li className={currentPage === "funds" ? "mob-current" : ""}>
                <a>
                  <img
                    className="pms-logo"
                    src="https://i.marketsmojo.com/mm-images/Atomic-logo.svg"
                    alt="logo"
                  />
                  <span>
                    <i className="arrow down"></i>
                  </span>
                </a>
                <ul className={currentPage === "funds" ? "firstopen" : ""}>
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
              <li
                className={`menu-highlight ${
                  currentPage === "funds" ? "mob-current" : ""
                }`}
              >
                <a>
                  <img
                    className="infinhub-logo"
                    src="https://i.marketsmojo.com/mm-images/InFinHub-logo.png"
                    alt="logo"
                  />
                  <span>
                    <i className="arrow down"></i>
                  </span>
                </a>
                <ul className={currentPage === "funds" ? "firstopen" : ""}>
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
            </ul>
          </div>
        )}
      </div>

      {/* Overlay */}
      {/* <div className="mob-menuright-overlay" onClick={closeMobMenu}></div> */}
    </>
  );
};

export default MobileSidebar;
