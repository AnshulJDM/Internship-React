import React from 'react'

const ArrayDemo1 = () => {
    var arr=["Acure","BMW","Cheverolet"]
  return (
    <div>
        <h1>ArrayDemo1</h1>

        {
            arr.map((arr)=>{
                return <li>
                    {arr}
                </li>
            })
        }
    </div>
  )
}

export default ArrayDemo1
