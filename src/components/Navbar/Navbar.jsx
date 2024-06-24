import React from 'react'
import './Navbar.css'

const Navbar = () => {
    const testData = ['About us', 'Contact us', 'Landing']
  return (
    <div>
        <ul className='nav-parent'>
            {/* <li>About {4+10}</li>
            <li>Contact</li>
            <li>Home</li>
            <li>Page</li> */}
            {
                testData.map((item, index) => (
                    <li>{item}</li>
                ))
            }
        </ul>
        {/* <button>Saba</button> */}
    </div>
  )
}

export default Navbar