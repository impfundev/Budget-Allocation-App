import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ChangeCurrency = () => {
  const { dispatch } = useContext(AppContext);
  const handleCurrency = (event) => {
    const currency = event.target.value;
    dispatch({
      type: "CHG_CURRENCY",
      payload: currency,
    });
  };
  return (
    <div className="dropdown alert alert-sm alert-warning">
      <label htmlFor="currency" className="pr-4">
        Currency:&nbsp;
      </label>

      <select
        className="btn btn-sm btn-warning"
        id="currency"
        onChange={handleCurrency}
      >
        <option defaultValue value="£">
          £ Pound
        </option>
        <option value="$">$ Dollar</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default ChangeCurrency;
