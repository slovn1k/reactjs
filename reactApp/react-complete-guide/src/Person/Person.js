import React from "react";

const person = props => {
  // here we are using props
  return (
    <p>
      I'am a {props.name} and I'am {props.age} years old!
    </p>
  );
};

export default person;
