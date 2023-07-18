import React from "react";

const Button = (props) => {
  return (
    <button class={`text-white md:px-4  duration-1000 ${props.class}`}>
      {props.children}
    </button>
  );
};

export default Button;
