import React from 'react'

export default function SetDemo() {
    //crating Set
    const demoSet = new Set([45,56,23,11,58,76,100])
    //adding value into the Set
    demoSet.add(10);
    demoSet.add(20);
    //fetching data from the Set
    let setValue="";
    demoSet.forEach((value,index,arr) => {
        setValue+=index +"\n\n";
    });
  return (
    <div>
      {setValue}
    </div>
  )
}
