import React from "react";

const MojoArea3 = ({ IMG_URL = "/images/" }) => {
  return (
    <div className="listmojoarea_cio_3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="dashboardimg">
              <img src="https://i.marketsmojo.com/mojoprofessional/tablet_dashboard-01.png" />
              <p>
                Disclaimer: The securities quoted are for illustration only and
                are not recommendatory.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 optpaddright">
                <div className="dashbox1">
                  <p className="dashbox2">Long Term Factors-</p>
                  <p className="dashbox3">
                    <strong>Quality -</strong> Consistency of financial
                    performance of the company over the last five years
                  </p>
                  <p className="dashbox3">
                    <strong>Valuation -</strong> Valuation adjusted with stock’s
                    long term performance and industry averages
                  </p>
                </div>
                <div className="dashplus">
                  <img src="https://i.marketsmojo.com/mojoprofessional/plusicon.png" />
                </div>
              </div>
              <div className="col-lg-6 optpaddleft">
                <div className="dashbox1_2">
                  <p className="dashbox2">Short Term Factors-</p>
                  <p className="dashbox3">
                    <strong>Current Financial Trend -</strong> Latest quarter
                    results as compared to the last five quarters
                  </p>
                  <p className="dashbox3">
                    <strong>Technicals -</strong> Smart averages of all seven
                    weekly and monthly technical parameters
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 optpaddright">
                <div className="dashbox1_3">
                  <div className="dashbox4">
                    <img src="https://i.marketsmojo.com/mojoprofessional/plusicon2.png" />
                  </div>
                  <div className="dashbox5">
                    <p className="dashbox2">TOTAL OF ABOVE</p>
                    <p className="dashbox3">
                      SCORE- A score out of 100 and recommendation of Buy/Sell
                      and Hold{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mojobuttonbanner">
              <div className="mojobuttoncontent">
                <div onClick="getStarted()" className="paybuttonconetnt">
                  <a href="/">GET STARTED</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MojoArea3;
