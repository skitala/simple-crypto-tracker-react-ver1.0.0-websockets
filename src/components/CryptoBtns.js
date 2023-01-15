import {
  FaBitcoin,
  FaEthereum,
} from "react-icons/fa";

const CryptoBtns = ({
  showBtc,
  showEth,
  showXrp,
  showBnb,
}) => {
  return (
    <div className="buttonCont">
      <button
        id="btn"
        className="btcBtn"
        onClick={showBtc(true)}
      >
        <FaBitcoin size={50} />
      </button>
      <button
        id="btn"
        className="ethBtn"
        onClick={() => showEth(true)}
      >
        <FaEthereum size={50} />
      </button>
      <button
        id="btn"
        className="xrpBtn"
        onClick={() => showXrp(true)}
      >
        XRP
      </button>
      <button
        id="btn"
        className="bnbBtn"
        onClick={() => showBnb(true)}
      >
        BNB
      </button>
    </div>
  );
};

export default CryptoBtns;
