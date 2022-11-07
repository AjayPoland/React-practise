import React from "react";

export default function MapDemo() {
  const emp_obj = {
    user_id: "a0101",
    fName: "Ajay",
    lName: "Manger",
    position: "Developer",
  };
  //converting object into map
  const employees = new Map(Object.entries(emp_obj));
  //fetching value
  let emp_vl,emp_ky_vl,emp_ky_one;
  emp_ky_one="";
  emp_ky_vl="";
  emp_vl="";
  employees.forEach((value, keys) => {
    emp_vl+=value +"\n";
    console.log("value:" + emp_vl);
  });
  //fetching pairs of keys and values
  for (const x of employees.entries()) {
    emp_ky_vl+=x + "\n";
    console.log("keys and values pair:" + x);
  }
  //fetching only keys.
  for (const x of employees.keys()){
    emp_ky_one+=x +"\n";
    console.log("only keys using keys() method:"+x);
  }
  return <div>
    <h2>Values: {emp_vl}</h2>
    <h2>keys and values pair: {emp_ky_vl}</h2>
    <h2> Only keys using keys() method: {emp_ky_one}</h2>
  </div>
}
