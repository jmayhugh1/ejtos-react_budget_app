import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const ExpenseTotal = () => {
  const { expenses, currency } = useContext(AppContext);
  // use the reduce function to get a total of all the costs
  // assigning this to a variable and displaying the variable in JSX
  // now whenever the user adds expenses the state will update
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="alert alert-primary">
      <span>
        Spent so far: {currency}
        {totalExpenses}
      </span>
    </div>
  );
};
export default ExpenseTotal;
