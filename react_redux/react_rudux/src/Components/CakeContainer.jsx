import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CakeContainer = () => {
  const numOfCakes = useSelector((state) => state.numofCake);

  console.log(numOfCakes);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>NumOfCakes:{numOfCakes}</h1>
      <button onClick={() => dispatch(buy_cake())}>cake Decremnet</button>
    </div>
  );
};

export default CakeContainer;
