import React from "react";

const Math = props => {
  let total = 0;
  
  console.log(props);

  switch(props.operator) {
    case "+":
    total = props.num1 + props.num2;
    break;
    case "-":
      total = props.num1 - props.num2;
      break;
    case "*":
      total = props.num1 * props.num2;
      break;
    case "/":
      total = props.num1 / props.num2;
      break;
    default:
  };
  
  return (
    <span>{total}</span>
  )
}

export default Math;