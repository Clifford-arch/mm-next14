import React from "react";

const UseSection = () => {
  return (
    <div className="ciothirdpannel">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <p className="mojohead5">HOW TO USE THIS SECTION</p>
            <p className="mojotext1">
              <strong>Simply input your stock –</strong> and check for our score
              and you can also deep dive into the analysis and research on that
              stock
            </p>
            <p className="mojotext1">
              <strong>Save the stock that interests you -</strong> save it in
              watchlist to track or simply add it to your portfolio if you are
              holding that stock
            </p>
            <p className="mojotext1">
              <strong>Automated alerts –</strong> once you have added the stock
              to your watchlist or portfolio, we will be sending you alerts on
              all saved stocks
            </p>
            <p className="mojotext1">
              <strong>See all our top stocks together –</strong> if you need an
              investing idea and don’t know where to start, simply go to our
              mojo stock section where we have pre-selected our top stocks for
              you
            </p>
            {/* //   <app-get-started [isPaid]="isPaid" [isLogin]="isLogin" [is_clmm]="is_clmm"
        //     [page_name]="page_name"></app-get-started> */}
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

export default UseSection;
