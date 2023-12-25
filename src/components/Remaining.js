import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    // the reduce function gets a total of all the costs
    // when the user adds an expense this causes the state to update
    // which will cause all connected components ro re render
    return (total = total + item.cost);
  }, 0);
  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";
  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: {currency}{budget - totalExpenses}</span>
    </div>
  );
};
export default Remaining;
