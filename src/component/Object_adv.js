import React from 'react'

export default function Object_adv() {
    let obj={count:0};
    //adding property and discriptor.
    Object.defineProperty(obj,"Name",{value: "Developer Ajay Manger"});
    //accessing the property
    const obj_property = Object.getOwnPropertyNames(obj);
    //accessing discripter of an object.
    const obj_discriptor=obj.Name;
    console.log(obj.Name)
    //defining setter and getter.
    Object.defineProperty(obj,"increment",{get: function(){
        this.count++
        return this.count;
    }});
    console.log("Using getter method, value on increment: " + obj.increment);
    Object.defineProperty(obj,"reset",{set: function(arg){
        this.count=arg;
    }})
    //resetting value;
    obj.reset=0;
    console.log("Using setter method, value on reset to zero: " +obj.count)
  return (
    <div>
        <h2>Object property: {obj_property}</h2> 
        <h2>Object discriptor: <br/> {obj_property} : {obj_discriptor} </h2>
    </div>
  )
}
