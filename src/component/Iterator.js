import React from "react";

const Iterator = () => {
  //empty object.
  let iteratorObj = {};
  iteratorObj[Symbol.iterator] = function () {
    let i = 0;
    return {
      next: function () {
        i++;
        return {
          done: i > 5 ? true : false,
          value: i,
        };
      },
    };
  };
  let itrValue = "";
  //for empty object
  for (let x of iteratorObj) {
    itrValue += x + "\n";
  }
  console.log(itrValue);
  //creating object.
  let iterableObj = {
    name: "ajay",
    person: ["Bijay", "Suman", "Kartik"],
    [Symbol.iterator]: function () {
      let i = 0;
      let person = this.person;
      return {
        next() {
          let value = person[i];
          i++;
          return {
            value: value + '\n',
            done: i > person.length ? true : false,
          };
        },
      };
    },
  };
  let text = "";
  for (let itrVlue of iterableObj) {
    text += itrVlue;
  }
  //pure object:
  let objectOne = {
    fName: "Ajay",
    lName: "Manger",
    city: "Siliguri",
  };
  //making it iterable object.
  objectOne[Symbol.iterator] = function () {
    let counter = 0;
    let properties = Object.keys(objectOne);
    return {
      next: function () {
        let value = objectOne[properties[counter++]];
        // counter++;
        return {
          value: value+"\n",
          done: counter > properties.length ? true : false,
        };
      },
    };
  };
  let text1 = "";
  // "in" operator can be used in the place of "of"
  for (let x of objectOne) {
    text1 += x + '\n';
  }
  console.log(text1);
  return (
    <div>
      <p>hi!</p>
      <h2>
        of the Empty Object <br />
        {itrValue}
      </h2>
      <p>
        Object do not hava an iterable property. So to make it iterable
        "Symbol.iterator" key has to be add to the object and next method must
        be define within it, to define how it iterates over the objects
        property.
      </p>
      <h2>Iterating over obect with the array as it property. </h2>
      <p>Output: {text}</p>
      <h2>Iterating over the Pure object</h2>
      <p>Output: {text1}</p>
    </div>
  );
};

export default Iterator;
