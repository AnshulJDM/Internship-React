import React from 'react'

export const ArrayDemo5 = () => {

  const state=[
    {
      id:1,
      statename:"A.P",
      population:250000,
      aqi:141
    },
    {
      id:2,
      statename:"T.N",
      population:300000,
      aqi:120
    },
    {
      id:3,
      statename:"Assam",
      population:100000,
      aqi:310
    },
    {
      id:4,
      statename:"Ahmedabad",
      population:500000,
      aqi:200
    }
  ]
  return (
    <div style={{textAlign:"center"}}>
      <h1>Array Demo 5</h1>

      <table border={1} class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>StateName</th>
            <th>Population</th>
            <th>AQI</th>
          </tr>
        </thead>

        <tbody>
            {
              state.map((statedetails)=>{
                return(
                  <tr>
                    <td>{statedetails.id}</td>

                    <td>{statedetails.statename}</td>

                    <td>
                      <span style={{color:statedetails.population>200000?"red":"black"}}>
                      {statedetails.population}
                      </span>
                    </td>

                    <td>
                      <span style={{color:statedetails.aqi>300?"red":"green"}}>
                      {statedetails.aqi}
                      </span>
                    </td>
                    
                  </tr>
                );
              })
            }
        </tbody>
      </table>
    </div>
  )
}