import React from "react";

export default function Object() {
  const object = {
    display: function () {
      return this.FristName+ "  "+ this.LastName;
    },
    fullAddress: function (city) {
      return (
        "Frist Name:" +
        this.FristName + 
        "  Last Name:" +
        this.LastName +
        " City:" +
        city
      );
    },
    personBIO: function(age,gen){
      return(
      `First Name: ${this.FristName }
      Last Name: ${this.LastName}
      Age: ${age}
      Gender:  ${gen}`
      )
    }
  };
  const objBind={
    num1: 14,
    num2: 12,
    add: function(){
      return this.num1+this.num2;
    }
  }
  const numbers={
    num1: 15,
    num2: 15
  }
  const person = {
    FristName: "Ajay",
    LastName: "Manger",
  };
  const str = object.display.call(person);
  const str1 = object.fullAddress.call(person, "Siliguri");
  const str2 = object.personBIO.apply(person,[26,"Male"]);
  // const str3 = objBind.add.bind(numbers);
  const str3 = objBind.add.bind(numbers);
  return <div>
    <p>Using call method</p>
    {str}
    <br/>
    {str1}
    <br/>
    {str2}
    <br/>
    {str3()}
  </div>;
}
