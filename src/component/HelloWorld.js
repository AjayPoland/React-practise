import React from "react";

const HelloWorld = (props) => {
  //destructing props.
  const { creater, country } = props;
  return (
    <div>
      <h1>Functional Component</h1>
      <p>
        HelloWorld, Representing: {country} <br /> Creater: {creater}
      </p>
    </div>
  );
};

export default HelloWorld;
