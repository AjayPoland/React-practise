import React from "react";

const HelloWorld = (props) => {
  //destructing props.
  const { creater, country } = props;
  const obj = {
    side: '',
    set setSide(value){
      this.side=value;
    },
    get getArea(){
     return Math.pow(this.side,2)
    }
  };
  //self-envoking function.
  // (function(){
  //   obj.setSide=16;
  // })();
  obj.setSide=9;
  console.log(obj.getArea);
  const area=obj.getArea;
  return (
    <div>
      <h1>Functional Component</h1>
      <p>
        HelloWorld, Representing: {country} <br /> Creater: {creater}
        <br/>
        side: {obj.side} unit <br/>
        Area of the square is: {area} sqUnit.
      </p>
    </div>
  );
};

export default HelloWorld;
