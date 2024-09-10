import React, { useState } from 'react'

const countries = [
    {
        name: 'India', value: 'IN', cities:[
            'Delhi',
            'Mumbai'
        ]
    },
    {
        name: 'Pakistan', value: 'PAK', cities:[
            'Lahore',
            'Karachi'
        ]
    },
    {
        name: 'Bangladesh', value: 'BG', cities:[
            'Dhaka',
            'Chittagong'
        ]
    },
]



export default function Task01() {
    const [country, setCountry] = useState("");
  return (
    <div>
      <select 
      value={country}
      onChange={(e) => {
        console.log(e.target.value);
        setCountry(e.target.value);
      }}>
        {countries.map((item, index) => {
            return <option value={index}>{item.name}</option>;
        })}
        </select>

        <select value={country}>
            {countries[country].cities.map((item, index) =>{
                return <option value={index}>{item}</option>;
            })}
            </select>
    </div>
  )
}
