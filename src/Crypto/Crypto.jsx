import React, { useEffect, useState } from "react";

let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

const Crypto = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  let getCrypto = async () => {
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setCoins(data);
    setLoading(false);
    console.log(data);
  };
  useEffect(() => {
    getCrypto();
  }, []);

  return (
    <>
      <div className="container-fluid fluid bg-dark text-white pt-2">
        <div className="container p-0">
          {loading ? (
            <h5 className="text-center">
              <div className="spinner-border me-2" role="status"></div>
              Loading...
            </h5>
          ) : (
            <ul className="list-group">
              {coins.map((coin) => {
                return (
                  <div
                    className="container text-white bg-dark bg-gradient rounded mb-2 crypto-font"
                    key={coin.symbol}
                  >
                    <div
                      className="row align-items-center text-center justify-content-center py-2"
                      key={coin.id}
                    >
                      <div className="col-1 col crypto-rank">
                        <p className="m-0">{coin.market_cap_rank}</p>
                      </div>
                      <div className="col-md-2 col">
                        <img src={coin.image} className="crypto-img" alt="img" />
                      </div>
                      <div className="col-md-2 col-5 crypto-percent">
                        {coin.market_cap_change_percentage_24h > 0 ? (
                          <p className="m-0 text-success">
                            <b>
                              +{coin.market_cap_change_percentage_24h.toFixed(2)}
                            </b>
                          </p>
                        ) : (
                          <p className="m-0 text-danger">
                            <b>
                              {coin.market_cap_change_percentage_24h.toFixed(2)}
                            </b>
                          </p>
                        )}
                      </div>
                      <div className="col-md-3 col-6">
                        <p className="m-0">Current Price</p>
                        <p className="m-0">
                          <i className="fas fa-rupee-sign"></i>{" "}
                          {coin.current_price}
                        </p>
                      </div>
                      <div className="col-md-4 col-6">
                        <p className="m-0">Market Price</p>
                        <p className="m-0">
                          <i className="fas fa-rupee-sign"></i>{" "}
                          {coin.market_cap}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Crypto;
