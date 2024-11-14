"use client";
import React, { useState } from "react";
import "@/styles/header.css";
import MutualFund from "./MutualFund";
import AtomicPms from "./AtomicPms";
import InFinHub from "./InFinHub";
import SubscribeMenu from "./SubscribeMenu";
import MobileSidebar from "./MobileSidebar";
import LoginButton from "./LoginButton";
import SearchOverlay from "./SearchOverlay";

const Header = ({
  isLoginLoaded,
  isLogin,
  isSearchOpen: defaultIsSearchOpen = false,
  searchDomain,
  pagename,
  infinityLandingUrl,
  homeUrl,
  imgUrl,
  card,
  openMobMenu,
  currentPage,
}) => {
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(defaultIsSearchOpen);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({
    stocks: false,
    portfolios: false,
    markets: false,
    webinars: false,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (menu) => {
    setIsSubMenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const closeCountryDropdown = () => {
    setIsCountryDropdownOpen(false);
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      <header
        id="mm-header"
        className={`sticky-top ${
          isLogin ? "header-login" : "header-non-login"
        }`}
      >
        {!isSearchOpen && (
          <div className="header-wrapper">
            {!isLoginLoaded && (
              <button className="openbtnleft" onClick={openMobMenu}>
                <MobileSidebar
                  imgUrl="/images/"
                  logo_img="/images/mm-logo.svg"
                />
              </button>
            )}
            <h1>
              <a
                href={
                  searchDomain === "infinity" && pagename !== "MojoPortfolio"
                    ? infinityLandingUrl
                    : homeUrl
                }
                className={
                  searchDomain === "infinity" && pagename !== "MojoPortfolio"
                    ? "infinity-logo"
                    : "mm-logo"
                }
              >
                <img
                  src="https://i.marketsmojo.com/mm-images/mm-logo.svg"
                  alt="logo"
                />
              </a>
            </h1>
            {searchDomain === "mm" && (
              <div
                id="country-dropdown-wrapper"
                onClickOutside={closeCountryDropdown}
              >
                <div
                  className="country-flag-wrapper"
                  onClick={() =>
                    setIsCountryDropdownOpen(!isCountryDropdownOpen)
                  }
                >
                  <div className="flag-in flag-sm"></div>
                  <img
                    className="down-arrow-img"
                    src="https://i.marketsmojo.com/mm-images/expand_more_down.svg"
                    alt="down arrow"
                  />
                </div>
                {isCountryDropdownOpen && (
                  <div className="menu-flag">
                    <div className="menu-flag-list">
                      <ul>
                        {card?.country_list?.map(
                          (country) =>
                            country.country_id !== 34 && (
                              <li key={country.country_id}>
                                <div
                                  className={`menu-flag-wrapper flag-list-sm flag-${country.class_name}`}
                                  onClick={() =>
                                    redirectToInfinhub(
                                      "/mojo/search",
                                      "infinhub",
                                      country.country_id
                                    )
                                  }
                                >
                                  <div
                                    className={`menu-flag-img flag-sm flag-${country.class_name}`}
                                  ></div>
                                  <div className="menu-flag-text">
                                    {country.country_name}
                                  </div>
                                </div>
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
            <nav className={`links ${isMenuOpen ? "open" : ""}`}>
              <a href="/" className="ic menu" onClick={toggleMenu} tabIndex="1">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </a>
              <a href="/" className="ic close" onClick={toggleMenu}></a>
              <ul className="main-nav">
                <li
                  className={`top-level-link ${
                    currentPage === "stocks" ? "current" : ""
                  }`}
                >
                  <a
                    className="mega-menu"
                    onClick={() => toggleSubMenu("stocks")}
                  >
                    <span>
                      Stocks <i className="arrow down"></i>
                    </span>
                  </a>
                  {isSubMenuOpen.stocks && (
                    <div className="sub-menu-block">
                      <div className="row-wrapper">
                        <div className="row-list">
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                Top Mojo Stocks
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                Where to invest in Market today
                              </div>
                            </a>
                          </div>
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                Hidden Turnarounds
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                Find them early and invest before they become
                                phenomenal stocks!
                              </div>
                            </a>
                          </div>
                          <div className="nav-content">
                            <a href="/">
                              <div class="nav-heading">
                                Reliable Performers
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div class="nav-subheading">
                                Companies showing best in class growth
                              </div>
                            </a>
                          </div>
                          <div className="nav-content">
                            <a href="/">
                              <div class="nav-heading">
                                MomentumNow Stocks
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div class="nav-subheading">
                                Catch best Momentum stocks in any market phase
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row-list">
                          <div className="nav-content">
                            <a href="/">
                              <div class="nav-heading">
                                Stock of the Week{" "}
                                <span class="new_link">NEW</span>
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div class="nav-subheading">
                                Weekly Stock Picks with Target Price
                              </div>
                            </a>
                          </div>
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                Stock of the Month
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                Investment Committee's Pick
                              </div>
                            </a>
                          </div>
                          <div className="nav-content">
                            <a href="/">
                              <div class="nav-heading">
                                Screener
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div class="nav-subheading">
                                Customize stock lists using Mojo Parameters
                              </div>
                            </a>
                          </div>
                          <div className="nav-content">
                            <a href="/">
                              <div class="nav-heading">
                                Stock Research
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div class="nav-subheading">
                                Real-time Research on All Listed Stocks
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row-list">
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                Research Reports
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                Verdict: Instant insights at your fingertips!
                              </div>
                            </a>
                          </div>
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                Switcher Report
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                Timely switch from your stocks to Mojo Stocks
                              </div>
                            </a>
                          </div>
                          <div className="nav-content">
                            <a href="/">
                              <div class="nav-heading">
                                Trading Calls
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div class="nav-subheading">
                                Daily Technical Calls
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="main-overlay"></div>
                    </div>
                  )}
                </li>

                <li
                  className={`top-level-link ${
                    currentPage === "portfolios" ? "current" : ""
                  }`}
                >
                  <a
                    className="mega-menu"
                    onClick={() => toggleSubMenu("portfolios")}
                  >
                    <span>
                      Portfolios <i className="arrow down"></i>
                    </span>
                  </a>
                  {isSubMenuOpen.portfolios && (
                    <div className="sub-menu-block">
                      <div className="row-wrapper">
                        <div className="row-list">
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                Personal Portfolios
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                Stay ahead with Real-Time Stock Trading
                              </div>
                            </a>
                          </div>
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                Your Watchlist
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                Track your Stocks
                              </div>
                            </a>
                          </div>
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                Model Portfolios
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                Zero Headache Model Portfolios
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row-list">
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                Personal Portfolio Optimizer
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                Actively manage your personal portfolio
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="main-overlay"></div>
                    </div>
                  )}
                </li>

                <li
                  className={`top-level-link ${
                    currentPage === "markets" ? "current" : ""
                  }`}
                >
                  <a
                    className="mega-menu"
                    onClick={() => toggleSubMenu("markets")}
                  >
                    <span>
                      Markets <i className="arrow down"></i>
                    </span>
                  </a>
                  {isSubMenuOpen.markets && (
                    <div className="sub-menu-block">
                      <div className="row-wrapper">
                        <div className="row-list">
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                Markets Today
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                Monitor Indices, Stocks and News Real-time
                              </div>
                            </a>
                          </div>
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                Earnings
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                View Latest Result Analysis of all Stocks
                              </div>
                            </a>
                          </div>
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                News
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                View all Stocks & Markets News
                              </div>
                            </a>
                          </div>
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                IPO
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                Analysis of IPOs
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row-list"></div>
                      </div>
                      <div className="main-overlay"></div>
                    </div>
                  )}
                </li>

                <li
                  className={`top-level-link ${
                    currentPage === "webinars" ? "current" : ""
                  }`}
                >
                  <a
                    className="mega-menu"
                    onClick={() => toggleSubMenu("webinars")}
                  >
                    <span>
                      Webinars <i className="arrow down"></i>
                    </span>
                  </a>
                  {isSubMenuOpen.webinars && (
                    <div className="sub-menu-block">
                      <div className="row-wrapper">
                        <div className="row-list"></div>
                        <div className="row-list">
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                Upcoming Webinars
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                Discover In-Depth Insights
                              </div>
                            </a>
                          </div>
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                Previous Recordings
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                See the best of Webinars
                              </div>
                            </a>
                          </div>
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                Blogs
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                Exclusive Insights
                              </div>
                            </a>
                          </div>
                          <div className="nav-content">
                            <a href="/">
                              <div className="nav-heading">
                                Media Centre
                                <img
                                  className="right--arrow"
                                  src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                                  alt=""
                                />
                              </div>
                              <div className="nav-subheading">
                                MarketsMojo in the News
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row-list"></div>
                      </div>
                      <div className="main-overlay"></div>
                    </div>
                  )}
                </li>
                <MutualFund />
                <AtomicPms />
                <InFinHub />
              </ul>
            </nav>

            <nav className="main">
              <SubscribeMenu />
              <ul>
                <li className="menu">
                  <a onClick={handleSearchClick}>
                    <img
                      src="https://i.marketsmojo.com/mm-images/search-icon.svg"
                      alt="Search"
                    />
                  </a>
                </li>
              </ul>
              <LoginButton imgUrl={imgUrl} />
            </nav>
          </div>
        )}
      </header>
      <SearchOverlay
        isSearchOpen={isSearchOpen}
        onClose={handleCloseSearch}
        imgUrl={imgUrl}
      />
    </>
  );
};

export default Header;
