import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  const elearray = [1,2,3,4,5,6,7,8]
  console.log(elearray.slice(1,4));
  const location = useLocation()
  return (
    <>
      {/* <h1>{location.state.ele.title}</h1>
      <div>{location.state.ele.description}</div> */}
    </>
  )
}

export default About


