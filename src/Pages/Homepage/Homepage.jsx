// import React from 'react'
// import Navbar from '../../components/Navbar/Navbar'
// import Hero from '../../components/Hero/Hero'
// import { Link } from 'react-router-dom'
// import { useState, useEffect, useRef } from 'react'

// const Homepage = () => {

//   const [inputValue, setInputValue] = useState("");
//   const previousInputValue = useRef("");
//   console.log(previousInputValue);

//     useEffect(() => {
//       previousInputValue.current = inputValue;
//     }, [inputValue]);
    
//   return (
//     <div className='home'>
//         <input type="text" onChange={e => setInputValue(e.target.value)} />
//         <h2>Current Value: {inputValue}</h2>
//       <h2>Previous Value: {previousInputValue.current}</h2>
//     </div>
//   )
// }

// export default Homepage


import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  // useEffect(() => {
  //   axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-05-27&sortBy=publishedAt&apiKey=6c4f02d3895b4639b40c9ccd895bc885')
  // .then(res => {
  //   console.log(res);
  //   setData(res.data.articles)
  // })
  // }, [])
  const handleClick = (ele) => {
    navigate('/about', {state: {ele: ele}})
  }
  return (
    <div>
      <Hero />
      <div>
    
      </div>
      {/* <Foodie /> */}

      <div>
        {data.map((ele, i) => {
          console.log(ele)
          return (
            <div key={i}>
              <h1>{ele.title}</h1>
              <p>{ele.description}</p>
              <button onClick={() => handleClick(ele)}>Read more</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Homepage