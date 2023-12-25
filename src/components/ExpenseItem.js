import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { IoAddCircleSharp, IoRemoveCircleSharp } from "react-icons/io5";
const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);
  const removeRow = (name) => {
    console.log("remove row " + name);
    dispatch({
      type: "DELETE_EXPENSE",
      payload: name,
    });
  };
  const decreaseAllocation = (name) => {
    console.log("decreasing by 10 " + name);
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <IoAddCircleSharp
          cursor="pointer"
          size="2.0em"
          color="green"
          onClick={(event) => increaseAllocation(props.name)}
        />
      </td>
      <td>
        <IoRemoveCircleSharp
          cursor="pointer"
          size="2.0em"
          color="red"
          onClick={(event) => decreaseAllocation(props.name)}
        ></IoRemoveCircleSharp>
      </td>
      <td>
        <TiDelete
          cursor="pointer"
          size="1.5em"
          onClick={(event) => removeRow(props.name)}
        ></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
