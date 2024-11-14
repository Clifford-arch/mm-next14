"use client";
import React, { useState, useEffect } from "react";

const NiftyStickyHeader = () => {
  // Sample data for indexes
  const sampleIndexData = [
    { name: "NIFTY 50", cmp: "19,425.10", chgp: "0.59", chg: "113.95", dir: 1 },
    { name: "SENSEX", cmp: "64,958.69", chgp: "0.62", chg: "398.85", dir: 1 },
    {
      name: "NIFTY BANK",
      cmp: "43,850.30",
      chgp: "-0.23",
      chg: "-101.45",
      dir: -1,
    },
    { name: "NIFTY IT", cmp: "31,125.85", chgp: "1.25", chg: "385.60", dir: 1 },
    {
      name: "NIFTY AUTO",
      cmp: "15,678.90",
      chgp: "0.45",
      chg: "70.25",
      dir: 1,
    },
    {
      name: "NIFTY PHARMA",
      cmp: "14,567.30",
      chgp: "-0.32",
      chg: "-47.15",
      dir: -1,
    },
    {
      name: "NIFTY METAL",
      cmp: "6,789.45",
      chgp: "0.89",
      chg: "59.85",
      dir: 1,
    },
    {
      name: "NIFTY FMCG",
      cmp: "45,678.25",
      chgp: "0.15",
      chg: "68.35",
      dir: 1,
    },
  ];

  // Sample data for recently visited stocks
  const sampleRecentVisited = [
    {
      sid: "TCS",
      short_name: "TCS",
      ind_name: "Information Technology",
      mcap_class: "Large Cap",
      cmp: "3,456.75",
      chg: "45.80",
      chgp: "1.34",
      dir: 1,
      total_vol: "2.5M",
      dot_summary: {
        quality_clr: "green",
        valuation_clr: "amber",
        fin_trend_clr: "green",
      },
    },
    {
      sid: "RELIANCE",
      short_name: "Reliance Industries",
      ind_name: "Oil & Gas",
      mcap_class: "Large Cap",
      cmp: "2,567.90",
      chg: "-23.45",
      chgp: "-0.91",
      dir: -1,
      total_vol: "3.1M",
      dot_summary: {
        quality_clr: "green",
        valuation_clr: "green",
        fin_trend_clr: "green",
      },
    },
    {
      sid: "HDFCBANK",
      short_name: "HDFC Bank",
      ind_name: "Banking",
      mcap_class: "Large Cap",
      cmp: "1,678.45",
      chg: "12.35",
      chgp: "0.74",
      dir: 1,
      total_vol: "4.2M",
      dot_summary: {
        quality_clr: "green",
        valuation_clr: "green",
        fin_trend_clr: "amber",
      },
    },
  ];

  const [nifty, setNifty] = useState([]);
  const [nifty1, setNifty1] = useState([]);
  const [recentVisited, setRecentVisited] = useState([]);
  const [recentVisitedFlag, setRecentVisitedFlag] = useState(0);
  const [isStickyCollapsed, setIsStickyCollapsed] = useState(false);
  const [priceMsg, setPriceMsg] = useState("");

  // Image URL - use a placeholder or your actual image path
  const imgUrl = "/images/";

  useEffect(() => {
    // Set initial data
    setNifty(sampleIndexData.slice(0, 4));
    setNifty1(sampleIndexData.slice(4, 8));
    setRecentVisited(sampleRecentVisited);
  }, []);

  const getDirClrDefault = (dir) => {
    return dir === 1 ? "up" : dir === -1 ? "down" : "";
  };

  const numberWithCommas = (value) => {
    return value.toString(); // The sample data already includes commas
  };

  const getClassbyClr = (color) => {
    return `dot-${color}`;
  };

  // Rest of the component remains exactly the same as before, just using the sample data instead
  return (
    <div className="nf-sen nfnew sticky-top" id="stickyheader">
      {/* Rest of JSX remains exactly the same */}
      <div id="nftytable">
        {/* Desktop View */}
        <div className="no-mob no-tab3" id="news_tickerweb">
          <ul>
            <li style={{ marginTop: "4px" }}>
              <table className="left">
                <tbody>
                  <tr>
                    {nifty.map((index_details) => (
                      <td key={index_details.name} className="dm-block">
                        <table className="left">
                          <tbody>
                            <tr>
                              <td className="nft-name">{index_details.name}</td>
                              <td className="nft-val">
                                {numberWithCommas(index_details.cmp)}
                              </td>
                              <td className="nft-close">
                                <span
                                  className={getDirClrDefault(
                                    index_details.dir
                                  )}
                                >
                                  <span
                                    className={` ${
                                      index_details.dir === 1
                                        ? " green"
                                        : index_details.dir === -1
                                        ? " red"
                                        : ""
                                    }`}
                                  >
                                    ({index_details.chgp}%)
                                  </span>
                                </span>
                              </td>
                              <td className="nft-change">
                                <span
                                  className={getDirClrDefault(
                                    index_details.dir
                                  )}
                                >
                                  <i
                                    className={`fa ${
                                      index_details.dir === 1
                                        ? "fa-arrow-up green"
                                        : index_details.dir === -1
                                        ? "fa-arrow-down red"
                                        : ""
                                    }`}
                                  ></i>
                                </span>
                                <span
                                  className={getDirClrDefault(
                                    index_details.dir
                                  )}
                                >
                                  <span
                                    className={` ${
                                      index_details.dir === 1
                                        ? " green"
                                        : index_details.dir === -1
                                        ? " red"
                                        : ""
                                    }`}
                                  >
                                    {index_details.chg}
                                  </span>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </li>

            <li style={{ marginTop: "5px" }}>
              <table className="left">
                <tbody>
                  <tr>
                    {nifty1.map((index_details) => (
                      <td key={index_details.name} className="dm-block">
                        <table className="left">
                          <tbody>
                            <tr>
                              <td className="nft-name">{index_details.name}</td>
                              <td className="nft-val">
                                {numberWithCommas(index_details.cmp)}
                              </td>
                              <td className="nft-close">
                                <span
                                  className={getDirClrDefault(
                                    index_details.dir
                                  )}
                                >
                                  <span
                                    className={` ${
                                      index_details.dir === 1
                                        ? " green"
                                        : index_details.dir === -1
                                        ? " red"
                                        : ""
                                    }`}
                                  >
                                    ({index_details.chgp}%)
                                  </span>
                                </span>
                              </td>
                              <td className="nft-change">
                                <span
                                  className={getDirClrDefault(
                                    index_details.dir
                                  )}
                                >
                                  <i
                                    className={`fa ${
                                      index_details.dir === 1
                                        ? "fa-arrow-up green"
                                        : index_details.dir === -1
                                        ? "fa-arrow-down red"
                                        : ""
                                    }`}
                                  ></i>
                                </span>
                                <span
                                  className={getDirClrDefault(
                                    index_details.dir
                                  )}
                                >
                                  <span
                                    className={` ${
                                      index_details.dir === 1
                                        ? " green"
                                        : index_details.dir === -1
                                        ? " red"
                                        : ""
                                    }`}
                                  >
                                    {index_details.chg}
                                  </span>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>

        {/* Mobile View */}
        <div className="no-web no-tab" id="news_tickerweb">
          <ul>
            {nifty.map((index_details, index) => (
              <li key={index}>
                <table className="left">
                  <tbody>
                    <tr>
                      <td className="nft-name">{index_details.name}</td>
                      <td className="nft-val">
                        {numberWithCommas(index_details.cmp)}
                      </td>
                      <td className="nft-change">
                        <span className={getDirClrDefault(index_details.dir)}>
                          <i
                            className={`fa ${
                              index_details.dir === 1
                                ? "fa-arrow-up green"
                                : index_details.dir === -1
                                ? "fa-arrow-down red"
                                : ""
                            }`}
                          ></i>
                        </span>
                        <span className={getDirClrDefault(index_details.dir)}>
                          {index_details.chg}
                        </span>
                      </td>
                      <td className="nft-close">
                        <span className={getDirClrDefault(index_details.dir)}>
                          ({index_details.chgp}%)
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Expandable Section */}
      {recentVisitedFlag === 1 && (
        <div className="slideable" id="derp">
          <div className="cf">
            <div id="IndexPD">
              <div className="homecard-top">
                <div className="cardHead">Markets</div>
                <div className="hm-card-cont">
                  {nifty.map((index_details) => (
                    <div key={index_details.name} className="row">
                      <div className="news-col01">
                        <div className="hm-stk-nm">
                          <div>{index_details.name}</div>
                          <p></p>
                        </div>
                      </div>
                      <div className="news-col02">
                        <div className="hm-stk-val">
                          <div>{numberWithCommas(index_details.cmp)}</div>
                        </div>
                      </div>
                      <div className="news-col03">
                        <div
                          className={`hm-stk-val-col ${getDirClrDefault(
                            index_details.dir
                          )}`}
                        >
                          <div>{index_details.chg}</div>
                          <p>{index_details.chgp}%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="RecentStk">
              <div className="homecard-top">
                <div className="cardHead">Last Visited</div>
                <div className="hm-card-cont">
                  {recentVisited.map(
                    (recent_visited) =>
                      recent_visited.short_name && (
                        <div key={recent_visited.sid} className="row">
                          <div className="news-col01">
                            <div className="hm-stk-nm">
                              <div>
                                <a href={`/stocks/${recent_visited.sid}`}>
                                  {recent_visited.short_name}
                                </a>
                                <span className="mojo-hover">
                                  <span
                                    className={getClassbyClr(
                                      recent_visited.dot_summary.quality_clr
                                    )}
                                  ></span>
                                  <span
                                    className={getClassbyClr(
                                      recent_visited.dot_summary.valuation_clr
                                    )}
                                  ></span>
                                  <span
                                    className={getClassbyClr(
                                      recent_visited.dot_summary.fin_trend_clr
                                    )}
                                  ></span>
                                </span>
                              </div>
                              <p>
                                {recent_visited.ind_name}{" "}
                                <span>({recent_visited.mcap_class})</span>
                              </p>
                            </div>
                          </div>
                          <div className="news-col02">
                            <div className="hm-stk-val">
                              <div>{recent_visited.cmp}</div>
                              {recent_visited.total_vol && (
                                <p>Vol. {recent_visited.total_vol}</p>
                              )}
                            </div>
                          </div>
                          <div className="news-col03">
                            <div
                              className={`hm-stk-val-col ${getDirClrDefault(
                                recent_visited.dir
                              )}`}
                            >
                              <div>{recent_visited.chg}</div>
                              <p>({recent_visited.chgp}%)</p>
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pull Down Button */}
      <div className="pull-down">
        {!isStickyCollapsed ? (
          <a
            id="pullDn"
            onClick={() => {
              setIsStickyCollapsed(true);
              setRecentVisitedFlag(1);
            }}
          >
            <img
              src="https://i.marketsmojo.com/chevron-down.png"
              className=""
              alt="chevron down"
            />
          </a>
        ) : (
          <a
            id="pullDn"
            onClick={() => {
              setIsStickyCollapsed(false);
              setRecentVisitedFlag(0);
            }}
          >
            <img src={`https://i.marketsmojo.com/close_comp.png`} alt="close" />
          </a>
        )}
        <div className="pull-sec"></div>
      </div>

      {/* Price Update Message */}
      <div className="facingassue" style={{ width: "100%", display: "block" }}>
        {priceMsg}
      </div>
    </div>
  );
};

export default NiftyStickyHeader;
