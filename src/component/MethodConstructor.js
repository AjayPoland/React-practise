import React from 'react'

const MethodConstructor = () => {
    function Person(fName,lName,age){
        this.FirstName=fName;
        this.LastName=lName;
        this.PersonAge=age;
        this.display= function(){
          return this.FirstName
        }
    }
    const obj1 = new Person("Ajay","Manger",30);
    //adding property
    obj1.country="India"
    //incorrect way of adding property .
    Person.city="Siliguri"
  return (
    <div>
      <h1>Person name: </h1>
      {obj1.FirstName}  {obj1.LastName} : {obj1.PersonAge} <br/>
      Country: {obj1.country} <br/>
      City: {obj1.city}
    </div>
  )
}

export default MethodConstructor
