import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, budget, expenses, currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleBudgetChange = (event) => {
    if (event.target.value < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
    } else if (event.target.value >= 20000) {
      alert("The value cannot exceed more than 20.000");
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: event.target.value,
      });
    }
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={budget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
