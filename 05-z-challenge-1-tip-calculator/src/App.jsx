import { useState } from "react";
import Bill from "./components/Bill";
import Tips from "./components/Tips";

const App = () => {
  const [bill, setBill] = useState(0);
  const [tipsYours, setTipsYours] = useState(0);
  const [tipsFriends, setTipsFriends] = useState(0);

  const tips = (bill * (tipsYours / 100 + tipsFriends / 100)) / 2;
  console.log(tips);
  const pay = bill + tips;

  const handleReset = () => {
    setBill(0);
    setTipsYours(0);
    setTipsFriends("");
  };

  return (
    <>
      <h1>Tip calculator</h1>
      <Bill bill={bill} setBill={setBill} />
      <Tips tips={tipsYours} setTips={setTipsYours} />
      <Tips tips={tipsFriends} setTips={setTipsFriends} />
      {bill !== 0 ? (
        <>
          <h1>
            Pay is €{pay.toFixed(2)} (€{bill.toFixed(2)} bill + €
            {tips.toFixed(2)} tip)
          </h1>
          <button onClick={handleReset}>Reset</button>
        </>
      ) : (
        <h1>Enter data</h1>
      )}
    </>
  );
};

export default App;
