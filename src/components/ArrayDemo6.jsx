import React from 'react'

export const ArrayDemo6 = () => {

    const sales=[
        {
            id: 1,
            day:"Monday",
            sales:6500,
            discount:20,
            profit:5000
        },
        {
            id: 2,
            day:"Tuesday",
            sales:9000,
            discount:60,
            profit:3000
        },
        {
            id: 3,
            day:"Wednesday",
            sales:10000,
            discount:10,
            profit:50000
        },
        {
            id: 4,
            day:"Thursday",
            sales:60000,
            discount:70,
            profit:30000
        },
        {
            id: 5,
            day:"Friday",
            sales:8000,
            discount:40,
            profit:4000
        },
        {
            id: 6,
            day:"Saturday",
            sales:200000,
            discount:80,
            profit:50000
        },
        {
            id: 7,
            day:"Sunday",
            sales:50000,
            discount:50,
            profit:10000
        }

    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Array Demo 6</h1>

        <table border={1} class="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Day</th>
                    <th>Sales</th>
                    <th>Discount</th>
                    <th>Profit</th>
                </tr>
            </thead>

            <tbody>
                {sales.map((saleDetails)=>{
                    return(
                        <tr>
                            <td>
                                <span style={{color:saleDetails.discount>50?"green":"white"}}>{saleDetails.id}</span>
                            </td>

                            <td>{saleDetails.day}</td>

                            <td>{saleDetails.sales}</td>

                            <td>{saleDetails.discount}</td>
                            
                            <td>{saleDetails.profit}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}