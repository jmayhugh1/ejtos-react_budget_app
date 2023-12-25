import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext);
  // using the useState hok to create a state variable called newBudget and initialize ith with the current value of budget
  // handleBudgetChange updates val of newBudget

  const [newBudget, setNewBudget] = useState(budget);
  const totalExpenses = expenses.reduce((total, item) => {
    // the reduce function gets a total of all the costs
    // when the user adds an expense this causes the state to update
    // which will cause all connected components ro re render
    return (total = total + item.cost);
  }, 0);
  const handleBudgetChange = (event) => {
    let inputValue = parseFloat(event.target.value);

    if (isNaN(inputValue)) {
      // If the input is not a valid number, do nothing
      return;
    }

    // Ensure the budget doesn't go below total expenses
    if (inputValue < totalExpenses) {
      setNewBudget(totalExpenses);
      alert("Budget cannot be less than total expenses.");
      return;
    }

    // Ensure the budget doesn't go above $20,000
    const maxBudget = 20000;
    if (inputValue > maxBudget) {
      setNewBudget(maxBudget);
      alert("Budget cannot be more than $20,000.");
      return;
    }

    // If all checks pass, update the newBudget state
    setNewBudget(inputValue);
  };

  useEffect(() => {
    dispatch({
      type: "SET_BUDGET",
      payload: newBudget,
    });
  }, [newBudget]);

  return (
    <div
      style={{ display: "flex", alignItems: "center" }}
      className="alert alert-secondary"
    >
      <span style={{ marginRight: "1px" }}> Budget:{currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
