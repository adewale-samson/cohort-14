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


import React from 'react'
import Hero from '../../components/Hero/Hero'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <div>
    
      </div>
      {/* <Foodie /> */}
    </div>
  )
}

export default Homepage