import React, { useState, useEffect, useCallback } from "react";

const SearchOverlay = ({ isSearchOpen, onClose, imgUrl }) => {
  const [searchSchemeText, setSearchSchemeText] = useState("");
  const [showSchemes, setShowSchemes] = useState(true);
  const [isRecentVisited, setIsRecentVisited] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [schemes, setSchemes] = useState([]);
  const [filteredLastVisitedSchemes, setFilteredLastVisitedSchemes] = useState(
    []
  );
  const [filteredMostVisitedSchemes, setFilteredMostVisitedSchemes] = useState(
    []
  );

  // Sample data
  const sampleStocks = [
    {
      Id: 592009,
      Company: "HDFC Bank Ltd.",
      Symbol: "HDFCBANK",
      tag: "Stock",
      stockprice: "1608.50",
      chgp: "-1.09",
      chgdir: -1,
      score: 88,
      scoretext: "Strong Buy",
      stock_traded_status: "Active",
      show_score: false,
      url: "https://www.marketsmojo.com/stocks-analysis/hdfc-bank-592009-0",
      ExchangeName: "bse",
      sname: "HDFC Bank",
      recurl: "",
    },
    {
      Id: 741664,
      Company: "Housing Development Finance Corporation Ltd (Merged) - HDFC",
      Symbol: "HDFC",
      tag: "News",
      stockprice: "",
      chgp: "",
      chgdir: 1,
      score: 75,
      scoretext: "",
      stock_traded_status: "Not Traded",
      show_score: true,
      url: "https://www.marketsmojo.com/stocks-analysis/housing-development-finance-corporationltdmerged-741664-0",
      recurl: "",
    },
    {
      Id: 1003127,
      Company: "Rail Vikas Nigam Ltd",
      ScriptCode: 542649,
      Symbol: "RVNL",
      url: "https://www.marketsmojo.com/news/rail-vikas-nigam-ltd-1003127",
      price: null,
      ExchangeName: "bse",
      sname: "Rail Vikas",
      tag: "News",
      stockprice: "636.15",
      chg: "25.60",
      chgp: "4.19",
      chgdir: 1,
      score: 64,
      scoretext: "Hold",
      stock_traded_status: "Active",
      show_score: false,
      recurl: "",
    },
    {
      Id: 513374,
      Company: "Tata Consultancy Services Ltd.",
      Symbol: "TCS",
      tag: "Stock",
      stockprice: "3912.20",
      chgp: "0.06",
      chgdir: 1,
      score: 75,
      scoretext: "Buy",
      stock_traded_status: "Active",
      show_score: true,
      url: "https://www.marketsmojo.com/stocks-analysis/tata-consultancy-services-513374-0",
      ExchangeName: "bse",
      sname: "TCS",
    },
    {
      Id: 949886,
      Company: "Tata Motors Ltd.",
      ScriptCode: 500570,
      Symbol: "TATAMOTORS",
      url: "https://www.marketsmojo.com/stocks-analysis/tata-motors-949886-0",
      price: null,
      ExchangeName: "bse",
      sname: "Tata Motors",
      tag: "Stock",
      stockprice: "1021.60",
      chg: "16.15",
      chgp: "1.61",
      chgdir: 1,
      score: 78,
      scoretext: "Strong Buy",
      stock_traded_status: "Active",
      show_score: true,
      recurl: "",
    },
    {
      Id: 594470,
      Company: "Tata Steel Ltd",
      ScriptCode: 500470,
      Symbol: "TATASTEEL",
      url: "https://www.marketsmojo.com/stocks-analysis/tata-steel-594470-0",
      price: null,
      ExchangeName: "bse",
      sname: "Tata Steel",
      tag: "Stock",
      stockprice: "169.90",
      chg: "1.90",
      chgp: "1.13",
      chgdir: 1,
      score: 61,
      scoretext: "Hold",
      stock_traded_status: "Active",
      show_score: true,
      recurl: "",
    },
    {
      Id: 790869,
      Company: "Tata Power Company Ltd",
      ScriptCode: 500400,
      Symbol: "TATAPOWER",
      url: "https://www.marketsmojo.com/stocks-analysis/tata-power-company-790869-0",
      price: null,
      ExchangeName: "bse",
      sname: "Tata Power Co.",
      tag: "Stock",
      stockprice: "441.35",
      chg: "4.10",
      chgp: "0.94",
      chgdir: 1,
      score: 72,
      scoretext: "Buy",
      stock_traded_status: "Active",
      show_score: true,
      recurl: "",
    },
    {
      Id: 790870,
      Company: "Tata ELISE Company Ltd",
      ScriptCode: 500400,
      Symbol: "TATAELISE",
      url: "https://www.marketsmojo.com/stocks-analysis/tata-power-company-790869-0",
      price: null,
      ExchangeName: "bse",
      sname: "Tata Elise.",
      tag: "ETF",
      stockprice: "441.35",
      chg: "4.10",
      chgp: "0.94",
      chgdir: 1,
      score: 72,
      scoretext: "Buy",
      stock_traded_status: "Active",
      show_score: true,
      recurl: "",
    },
    {
      Id: 777263,
      Company: "Palsoft <b>Infosys</b>tems Ltd (Delisted)",
      ScriptCode: 511597,
      Symbol: "",
      url: "https://www.marketsmojo.com/stocks-analysis/palsoft-infosystems-777263-0",
      price: null,
      ExchangeName: "bse",
      sname: "Palsoft Infosys.",
      tag: "Mutual Fund",
      stockprice: "6200",
      chg: "6.10",
      chgp: "22.2",
      chgdir: 1,
      score: 99,
      scoretext: "Sell",
      stock_traded_status: "Active",
      show_score: true,
      recurl: "",
    },
    {
      Id: 777263,
      Company: "Palsoft <b>Infosys</b>tems Ltd (Delisted)",
      ScriptCode: 511596,
      Symbol: "",
      url: "https://www.marketsmojo.com/news/palsoft-infosystems-ltd-777263",
      price: null,
      ExchangeName: "bse",
      sname: "Palsoft Infosys.",
      tag: "News",
      stockprice: "",
      chg: "",
      chgp: "",
      chgdir: "",
      score: "",
      scoretext: "",
      stock_traded_status: "Not Traded",
      show_score: 1,
      recurl: "",
    },
    {
      Id: 317876,
      Company: " (Delisted) - Websity <b>Infosys</b>",
      ScriptCode: 511415,
      Symbol: "",
      url: "https://www.marketsmojo.com/stocks-analysis/-317876-0",
      price: null,
      ExchangeName: "bse",
      sname: null,
      tag: "Stock",
      stockprice: "",
      chg: "",
      chgp: "",
      chgdir: "",
      score: "",
      scoretext: "",
      stock_traded_status: "",
      show_score: 1,
      recurl: "",
    },
    {
      Id: 317876,
      Company: " (Delisted) - Websity <b>Infosys</b>",
      ScriptCode: 511415,
      Symbol: "",
      url: "https://www.marketsmojo.com/news/-317876",
      price: null,
      ExchangeName: "bse",
      sname: null,
      tag: "News",
      stockprice: "",
      chg: "",
      chgp: "",
      chgdir: "",
      score: "",
      scoretext: "",
      stock_traded_status: "",
      show_score: 1,
      recurl: "",
    },
    {
      Id: 779494,
      Company: "Diamond <b>Infosys</b>tems Ltd (Delisted)",
      ScriptCode: 530801,
      Symbol: "",
      url: "https://www.marketsmojo.com/stocks-analysis/diamond-infosystems-779494-0",
      price: null,
      ExchangeName: "bse",
      sname: "Diamond Infosys.",
      tag: "Stock",
      stockprice: "",
      chg: "",
      chgp: "",
      chgdir: "",
      score: "",
      scoretext: "",
      stock_traded_status: "Not Traded",
      show_score: false,
      recurl: "",
    },
  ];

  const headerFilterType = [
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
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const filterSchemes = useCallback(() => {
    let filtered = sampleStocks;

    if (searchSchemeText.trim() !== "") {
      filtered = filtered.filter(
        (scheme) =>
          scheme.Company.toLowerCase().includes(
            searchSchemeText.toLowerCase()
          ) ||
          (scheme.Symbol &&
            scheme.Symbol.toLowerCase().includes(
              searchSchemeText.toLowerCase()
            )) ||
          scheme.tag.toLowerCase().includes(searchSchemeText.toLowerCase())
      );
    }

    // Filter by type
    if (selectedFilter !== "all") {
      filtered = filtered.filter((scheme) => {
        if (selectedFilter === "stocks") return scheme.tag === "Stock";
        if (selectedFilter === "mf") return scheme.tag === "Mutual Fund";
        if (selectedFilter === "etf") return scheme.tag === "ETF";
        if (selectedFilter === "news") return scheme.tag === "News";
        return true;
      });
    } else {
      filtered = filtered.filter((scheme) => scheme.tag !== "News");
    }

    setSchemes(filtered);
    const lastVisited = sampleStocks.slice(0, 3);
    const mostVisited = sampleStocks.slice(1, 5);
    setFilteredLastVisitedSchemes(lastVisited);
    setFilteredMostVisitedSchemes(mostVisited);
  }, [searchSchemeText, selectedFilter]);

  const debouncedFilterSchemes = useCallback(debounce(filterSchemes, 1000), [
    filterSchemes,
  ]);

  useEffect(() => {
    debouncedFilterSchemes();
  }, [debouncedFilterSchemes]);

  const searchScheme = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  const handleFilterChange = (key) => setSelectedFilter(key);
  const filterRecentSearch = (filterKey) => {
    setSelectedFilter(filterKey);
  };

  const goToScript = (url, scheme) => {
    window.location.href = url;
  };

  const preventDefault = (e, scheme) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      {isSearchOpen && (
        <div className="overlay">
          <div className="overlay__inner">
            <div
              className={`overlay__content ${
                isSearchOpen ? "fade-in-search" : "fade-out-search"
              }`}
            >
              <div id="mm-header" className="sticky-top">
                <div className="search-big">
                  <form className="example">
                    <input
                      type="text"
                      placeholder="Search any Stocks, MFs, ETFs"
                      name="search-terms"
                      autoComplete="off"
                      value={searchSchemeText}
                      onChange={(e) => setSearchSchemeText(e.target.value)}
                      onKeyUp={searchScheme}
                    />
                    <a onClick={onClose}>
                      <img
                        src="https://i.marketsmojo.com/mm-images/search-cross.png"
                        alt="arrow"
                      />
                    </a>
                  </form>
                </div>
              </div>

              {showSchemes && (
                <div className="mm-search-wrapper">
                  <div className="mm-search">
                    <div className="filter-top">
                      {headerFilterType.map((filter) => (
                        <span
                          key={filter.key}
                          className={
                            selectedFilter === filter.key ? "active" : ""
                          }
                          onClick={() => handleFilterChange(filter.key)}
                        >
                          {filter.label}
                        </span>
                      ))}
                    </div>

                    {searchSchemeText.trim() !== "" && (
                      <>
                        {schemes.length === 0 ? (
                          <div className="search-for">
                            No results found for {searchSchemeText}
                          </div>
                        ) : (
                          <>
                            <div className="search-for">Search Results</div>
                            {schemes.map((scheme, index) => (
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
      )}
    </>
  );
};

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
                  src={`${
                    scheme.chgdir === 1
                      ? "https://i.marketsmojo.com/mm-images/arrow-up-green.svg"
                      : "https://i.marketsmojo.com/mm-images/arrow-down-red.svg"
                  }`}
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
                              >
                                {scheme.score}
                              </circle>
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

export default SearchOverlay;
