"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import sampleData from "../../data/data.json";

export default function StockSearch(imgUrl) {
  const [showSchemesHome, setShowSchemesHome] = useState(false);
  const [searchTermHome, setSearchTermHome] = useState("");
  const [selectedFilterHome, setSelectedFilterHome] = useState("all");
  const [filteredSchemesHome, setFilteredSchemesHome] = useState([]);
  const [filteredLastVisitedSchemes, setFilteredLastVisitedSchemes] = useState(
    []
  );
  const [filteredMostVisitedSchemes, setFilteredMostVisitedSchemes] = useState(
    []
  );
  const deviceType = "desktop";
  const componentRef = useRef(null);
  const [isRecentVisited, setIsRecentVisited] = useState(true);

  const headerFilterTypeHome = [
    { key: "all", label: "All" },
    { key: "stocks", label: "Stocks" },
    { key: "mf", label: "Mutual Funds" },
    { key: "etf", label: "ETFs" },
    { key: "news", label: "News" },
  ];

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const filteredData = useCallback(() => {
    let filtered = sampleData;

    if (searchTermHome.trim() !== "") {
      filtered = filtered.filter(
        (scheme) =>
          scheme.Company.toLowerCase().includes(searchTermHome.toLowerCase()) ||
          (scheme.Symbol &&
            scheme.Symbol.toLowerCase().includes(
              searchTermHome.toLowerCase()
            )) ||
          scheme.tag.toLowerCase().includes(searchTermHome.toLowerCase())
      );
    }

    if (selectedFilterHome !== "all") {
      filtered = filtered.filter((scheme) => {
        if (selectedFilterHome === "stocks") return scheme.tag === "Stock";
        if (selectedFilterHome === "mf") return scheme.tag === "Mutual Fund";
        if (selectedFilterHome === "etf") return scheme.tag === "ETF";
        if (selectedFilterHome === "news") return scheme.tag === "News";
        return true;
      });
    } else {
      filtered = filtered.filter((scheme) => scheme.tag !== "News");
    }

    setFilteredSchemesHome(filtered);
    const lastVisited = sampleData.slice(0, 3);
    const mostVisited = sampleData.slice(1, 5);
    setFilteredLastVisitedSchemes(lastVisited);
    setFilteredMostVisitedSchemes(mostVisited);
  }, [searchTermHome, selectedFilterHome]);

  const debouncedFilterSchemes = useCallback(debounce(filteredData, 2000), [
    filteredData,
  ]);

  useEffect(() => {
    debouncedFilterSchemes();
  }, [debouncedFilterSchemes]);

  const handleSearchChange = (e) => setSearchTermHome(e.target.value);
  const handleFilterChange = (key) => setSelectedFilterHome(key);
  const onFocus = () => setShowSchemesHome(true);

  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setShowSchemesHome(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const goToScript = (url, scheme) => {
    window.location.href = url;
  };

  const preventDefault = (e, scheme) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div 
      className=  {`maincontent stock_research_main ${
        showSchemesHome ? "bmv" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="text-center searchProHome">
          <div
            id="ct_header"
            className={`ct_pgname_header_${
              deviceType === "desktop" ? "web" : "mob"
            }`}
          />
        </div>
      </div>
      <div className="listmojoarea_cio">
        <div className="row">
          <div className="col-md-12">
            <div className="searchhead">
              <p className="searchheadtext">
                Our Mojo Score gives you Buy/Sell/Hold Recommendations on all
                stocks
                <br />
                Search your stock and find out
              </p>
              <div className="cearchinput" ref={componentRef}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control stiput"
                    id="searchtext_home_desk"
                    value={searchTermHome}
                    onChange={handleSearchChange}
                    placeholder="Search stocks"
                    onFocus={onFocus}
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </div>

                 
                </div>
                
                {showSchemesHome && (
                    <div className="mm-search-wrapper">
                      <div className="mm-search">
                        <div className="filter-top">
                          {headerFilterTypeHome.map((filter) => (
                            <span
                              key={filter.key}
                              className={
                                selectedFilterHome === filter.key
                                  ? "active"
                                  : ""
                              }
                              onClick={() => handleFilterChange(filter.key)}
                            >
                              {filter.label}
                            </span>
                          ))}
                        </div>

                        {searchTermHome.trim() !== "" && (
                          <>
                            {filteredSchemesHome.length === 0 ? (
                              <div className="search-for">
                                No results found for {searchTermHome}
                              </div>
                            ) : (
                              <>
                                <div className="search-for">Search Results</div>
                                {filteredSchemesHome.map((scheme, index) => (
                                  <SchemeItem
                                    key={index}
                                    scheme={scheme}
                                    imgUrl={imgUrl}
                                    onItemClick={goToScript}
                                    onPreventDefault={preventDefault}
                                  />
                                ))}
                              </>
                            )}
                          </>
                        )}

                        {/* Recently Visited Section - Always shown */}
                        {filteredLastVisitedSchemes.length > 0 && (
                          <>
                            <div className="search-for">Recently Visited</div>
                            {filteredLastVisitedSchemes.map((scheme, index) => (
                              <SchemeItem
                                key={index}
                                scheme={scheme}
                                imgUrl={imgUrl}
                                onItemClick={goToScript}
                                onPreventDefault={preventDefault}
                              />
                            ))}
                          </>
                        )}

                        {/* Most Searched Section - Always shown */}
                        {filteredMostVisitedSchemes.length > 0 && (
                          <>
                            <div className="search-for">Most Searched</div>
                            {filteredMostVisitedSchemes.map((scheme, index) => (
                              <SchemeItem
                                key={index}
                                scheme={scheme}
                                imgUrl={imgUrl}
                                onItemClick={goToScript}
                                onPreventDefault={preventDefault}
                              />
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SchemeItem = ({ scheme, imgUrl, onItemClick, onPreventDefault }) => {
  const getScoreTextColor = (scoreText) => {
    if (scoreText === "Hold") return "text-orange";
    if (scoreText === "Buy" || scoreText === "Strong Buy") return "text-green";
    if (scoreText === "Sell" || scoreText === "Strong Sell") return "text-red";
    return "text-gray";
  };

  return (
    <div id="flex-container" onClick={() => onItemClick(scheme.url, scheme)}>
      <div className="fund-name">
        <span dangerouslySetInnerHTML={{ __html: scheme.Company }} />
        <div className="range">
          {scheme.stockprice}
          {scheme.stock_traded_status !== "" &&
            scheme.stock_traded_status !== "Not Traded" && (
              <span className="range-percent">
                <img
                  src={
                    scheme.chgdir === 1
                      ? "https://i.marketsmojo.com/mm-images/arrow-up-green.svg"
                      : "https://i.marketsmojo.com/mm-images/arrow-down-red.svg"
                  }
                  alt="arrow"
                />
                {scheme.chgp}%
              </span>
            )}
        </div>
      </div>

      <div className="Search-colum2">
        <div className="premiumtxt">
          {!scheme.show_score ? (
            <>
              {(scheme.tag === "Stock" || scheme.tag === "News") && (
                <>
                  <span className="premiumbg">Premium</span>
                  <div className="premiumtxt-bottom">
                    <a
                      href={
                        scheme.tag === "Stock" || scheme.tag === "News"
                          ? scheme.recurl
                          : ""
                      }
                      onClick={(e) => onPreventDefault(e, scheme)}
                    >
                      {scheme.tag === "Stock" || scheme.tag === "News"
                        ? "View Reco"
                        : "View Ratings"}
                    </a>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {scheme.tag !== "Stock" && scheme.tag !== "News" ? (
                <div
                  className={`text-info ${getScoreTextColor(scheme.scoretext)}`}
                >
                  {scheme.scoretext}
                  {scheme.scoretext !== "Not Rated" && (
                    <span> | Score {scheme.score}</span>
                  )}
                </div>
              ) : (
                <div className="sct2">
                  {scheme.scoretext !== "" &&
                    scheme.scoretext !== "Not Rated" && (
                      <>
                        <div className="sctcard">
                          <div className="sct5 ng-binding">{scheme.score}</div>
                          <div className="percent">
                            <svg>
                              <circle cx="14" cy="14" r="12" />
                              <circle
                                cx="14"
                                cy="14"
                                r="12"
                                style={{ "--percent": scheme.score }}
                                className={`stroke-${getScoreTextColor(
                                  scheme.scoretext
                                )}`}
                              />
                            </svg>
                          </div>
                        </div>
                        <div
                          className={`scp ${getScoreTextColor(
                            scheme.scoretext
                          )}`}
                        >
                          {scheme.scoretext}
                        </div>
                      </>
                    )}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="stocks">{scheme.tag}</div>
    </div>
  );
};
