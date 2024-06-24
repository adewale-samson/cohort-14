import React, { useState } from 'react'

const Form = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        phoneNumber: '',
        gender: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({})

    function handleChange(e) {
        console.log(e.target);
        // const name = e.target.name
        // const value = e.target.value
        const {name, value} = e.target
        console.log(name);
        console.log(value);
        setData({...data, 
            [name]: value})
    }

    const validateInput = () => {
        let newErrors = {}
        if (!data.firstName) {
            newErrors.firstName = 'First name is necessary'
        }
        if (!data.lastName) {
            newErrors.lastName = 'Last name is necessary'
        }
        if (!data.password) {
            newErrors.password = 'Enter a password'
        }
        else if(data.password.length < 6) {
            newErrors.password = 'Password should be 6 characters or more'
        }
        if (data.confirmPassword == data.password) {
            newErrors.confirmPassword = 'Password doesnt match'
        }

        setErrors(newErrors)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validateInput()
        // if (isValid) {
            
        // }
    }
    console.log(data.firstName);
    console.log(data);
  return (
    <form onSubmit={handleSubmit}>
      <div>
              <label >First Name:</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={data.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p style={{color: 'red', marginTop: '5px', marginBottom: '5px'}}>{errors.firstName}</p>}
        </div>      
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
        />
        {errors.lastName && <p style={{color: 'red', marginTop: '5px', marginBottom: '5px'}}>{errors.lastName}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={data.gender} onChange={handleChange}>
            <option value=''>Please select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={data.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={data.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{color: 'red', marginTop: '5px', marginBottom: '5px'}}>{errors.password}</p>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={data.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p style={{color: 'red', marginTop: '5px', marginBottom: '5px'}}>{errors.confirmPassword}</p>}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          value={data.age}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Submit form</button>
          </form>
  )
}

export default Form