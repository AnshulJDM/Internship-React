import React from 'react'

const ArrayDemo2 = () => {
    var students=[
        {
            Name:"Anshul",
            Age:17
        },
        {
            Name:"krishna",
            Age:18
        },
        {
            Name:"Jayesh",
            Age:20
        }
    ]
  return (
    <div>
        <h1 style={{textAlign:"center"}}>ArrayDemo2</h1>
        <br />

        {
            students.map((stu)=>{
                return <div>
                <h4 style={{textAlign:"center"}}>Name:{stu.Name}</h4>
                <h4 style={{textAlign:"center"}}>Age:{stu.Age}</h4><br />

                </div>
                        
            })
        }
    </div>
  )
}

export default ArrayDemo2
