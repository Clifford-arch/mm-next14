import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function AtomicPms({ card, imgUrl = "/images/" }) {
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
      <a className="mega-menu pms-logo-menu" href="/">
        <span>
          <img
            className="pms-logo"
            src="https://i.marketsmojo.com/mm-images/Atomic-logo.svg"
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
                  Connect with Our Advisors
                  <img
                    className="right--arrow"
                    src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                    alt=""
                  />
                </div>
                <div className="nav-subheading">
                  Expert advice tailored to your investment needs.
                </div>
              </a>
            </div>

            <div className="nav-content">
              <a href="/">
                <div className="nav-heading">
                  PMS Offerings
                  <img
                    className="right--arrow"
                    src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                    alt=""
                  />
                </div>
                <div className="nav-subheading">
                  Maximize returns with flexible, data-driven, risk-adjusted
                  portfolios.
                </div>
              </a>
            </div>
            <div className="nav-content">
              <a href="/">
                <div className="nav-heading">
                  Group's Proven Heritage
                  <img
                    className="right--arrow"
                    src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                    alt=""
                  />
                </div>
                <div className="nav-subheading">
                  Led by industry veterans with a proven success track record.
                </div>
              </a>
            </div>
          </div>
          <div className="row-list">
            <div className="ct_funds_menu_web">
              <div className="nav-content">
                <a href="/">
                  <div className="nav-heading">
                    Investment Philosophy
                    <img
                      className="right--arrow"
                      src="https://i.marketsmojo.com/mm-images/right-arrow.svg"
                      alt=""
                    />
                  </div>
                  <div className="nav-subheading">
                    Comprehensive, data-driven insights from 4000+ stocks for
                    optimal returns.
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-overlay"></div>
      </div>
    </li>
  );
}

export default AtomicPms;
