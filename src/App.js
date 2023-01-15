import CryptoBtns from "./components/CryptoBtns";
import {
  useEffect,
  useState,
  useRef,
} from "react";

function App() {
  const [toggleBtc, showBtc] =
    useState(false);
  const [toggleEth, showEth] =
    useState(false);
  const [toggleXrp, showXrp] =
    useState(false);
  const [toggleBnb, showBnb] =
    useState(false);
  // useEffect(() => {
  //   console.log(toggleBtc);
  //   console.log(toggleEth);
  //   console.log(toggleXrp);
  //   console.log(toggleBnb);
  // });
  const bitcoin = useRef("");
  const ethereum = useRef("");
  const xrp = useRef("");
  const bnb = useRef("");

  function bitcoinPrice() {
    let ws = new WebSocket(
      "wss://stream.binance.com:9443/ws/btceur@trade"
    );

    let lastPrice = null;

    ws.onmessage = (e) => {
      let stockObject = JSON.parse(
        e.data
      );
      let price = parseFloat(
        stockObject.p
      ).toFixed(2);
      bitcoin.current.innerText = `Bitcoin: ${parseFloat(
        stockObject.p
      ).toFixed(2)} EUR/COIN`;

      bitcoin.current.style.color =
        !lastPrice ||
        lastPrice === price
          ? "black"
          : price > lastPrice
          ? "green"
          : "crimson";

      lastPrice = price;
      return price;
    };
  }

  function bnbPrice() {
    let ws = new WebSocket(
      "wss://stream.binance.com:9443/ws/bnbeur@trade"
    );

    let lastPrice = null;

    ws.onmessage = (e) => {
      let stockObject = JSON.parse(
        e.data
      );
      let price = parseFloat(
        stockObject.p
      ).toFixed(2);
      bnb.current.innerText = `BNB: ${parseFloat(
        stockObject.p
      ).toFixed(2)} EUR/COIN`;

      bnb.current.style.color =
        !lastPrice ||
        lastPrice === price
          ? "black"
          : price > lastPrice
          ? "green"
          : "crimson";

      lastPrice = price;
      return price;
    };
  }
  function xrpPrice() {
    let ws = new WebSocket(
      "wss://stream.binance.com:9443/ws/xrpeur@trade"
    );

    let lastPrice = null;

    ws.onmessage = (e) => {
      let stockObject = JSON.parse(
        e.data
      );
      let price = parseFloat(
        stockObject.p
      ).toFixed(2);
      xrp.current.innerText = `XRP: ${parseFloat(
        stockObject.p
      ).toFixed(2)} EUR/COIN`;

      xrp.current.style.color =
        !lastPrice ||
        lastPrice === price
          ? "black"
          : price > lastPrice
          ? "green"
          : "crimson";

      lastPrice = price;
      return price;
    };
  }

  function ethPrice() {
    let ws = new WebSocket(
      "wss://stream.binance.com:9443/ws/etheur@trade"
    );

    let lastPrice = null;

    ws.onmessage = (e) => {
      let stockObject = JSON.parse(
        e.data
      );
      let price = parseFloat(
        stockObject.p
      ).toFixed(2);
      ethereum.current.innerText = `ETH: ${parseFloat(
        stockObject.p
      ).toFixed(2)} EUR/COIN`;

      ethereum.current.style.color =
        !lastPrice ||
        lastPrice === price
          ? "black"
          : price > lastPrice
          ? "green"
          : "crimson";

      lastPrice = price;
      return price;
    };
  }

  return (
    <>
      <div className="App">
        <CryptoBtns
          showBtc={showBtc}
          showEth={showEth}
          showXrp={showXrp}
          showBnb={showBnb}
        />
        <h1
          id="cryptoPrice"
          className="cryptoPriceBtc"
          ref={bitcoin}
        >
          {toggleBtc
            ? bitcoinPrice()
            : ""}
        </h1>
        <h1
          id="cryptoPrice"
          className="cryptoPriceEth"
          ref={ethereum}
        >
          {toggleEth ? ethPrice() : ""}
        </h1>
        <h1
          id="cryptoPrice"
          className="cryptoPriceXrp"
          ref={xrp}
        >
          {toggleXrp ? xrpPrice() : ""}
        </h1>
        <h1
          id="cryptoPrice"
          className="cryptoPriceBnb"
          ref={bnb}
        >
          {toggleBnb ? bnbPrice() : ""}
        </h1>
      </div>
    </>
  );
}

export default App;
