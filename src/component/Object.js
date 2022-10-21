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
  };
  const person = {
    FristName: "Ajay",
    LastName: "Manger",
  };
  const str = object.display.call(person);
  const str1 = object.fullAddress.call(person, "Siliguri");
  return <div>
    <p>Using call method</p>
    {str}
    <br/>
    {str1}
  </div>;
}
