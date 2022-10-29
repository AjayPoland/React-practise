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
    //Using different methods. with sets
    const st_vl=demoSet.values();
    console.log("demoSet.values()" +st_vl)
    let st_vl_rslt= "";
    for(let x of st_vl){
      st_vl_rslt +=x +"\n";
    }
    console.log("demoSet.entries()"+demoSet.entries());
    let st_vl_entries="";
    let st_ky_entries="";
    for(const [keys,values] of demoSet.entries()){
      //here keys and values has same output, coz set are itself unique, it has no key value.
      st_vl_entries+=values+"\n";
      st_ky_entries+=keys +"\n";
    }
  return (
    <div>
      <h2>forEach() output of sets:</h2>
      {setValue}
      <br/>
      <h2>values() output of sets:</h2>
      {st_vl_rslt}
      <br/>
      <h2>entries() output of sets value:</h2>
      <p><i>entries() return the iterable object with [keys,values] pairs.</i></p>
      {st_vl_entries}
      <br/>
      <h2>entries() output of sets keys:</h2>
      <p><i>entries() return the iterable object with [keys,values] pairs.</i></p>
      <p></p>
      {st_ky_entries}
      <br/>
      <b><strong><i>Notice: </i></strong> check the console log.</b>
    </div>
  )
}
