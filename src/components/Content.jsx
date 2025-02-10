import React from 'react'

const Content = () => {
    var name ="Pagani"
  var age = 17
  var isActive =true;
  var user ={
    fname:"Anshul",
    lname:"Panchal",
    age:24

  }
  return (
    <div>
       {name}
     <h1>Name ={name}</h1> 
     <h2>Age ={age}</h2>
      <h2>isActive ={isActive}</h2>
      <h2>{isActive == true ? "Active":"Not Active"}</h2>
      <h3>First Name = {user.fname}</h3>
      <h3>last Name = {user.lname}</h3>
      <h4>Age = {user.age}</h4>
    </div>
  )
}

export default Content
