import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { SignupAction } from '../../api/auth'
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        fullName: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data, 
            [name]: value
        })
    }
    const handleValidation = () => {}
    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = handleValidation()
        axios.post('https://medical-records-app-1.onrender.com/api/v1/admin/create', data)
        .then(response => {
            console.log(response);
            if (response.status === 201) {
                navigate('/about')
            }
        })
        .catch(error => {
            console.log(error);
        })
        // SignupAction(data)
        // .then(res => {
        //     console.log(res)
        //     toast.success('Account created Successfully!')
        // })
        // .catch(err => {
        //     console.log(err)
        //     toast.error('Failed!')
        // })

    }
  return (
    <div className='form-container'>
        <ToastContainer />
        <h1>Signup Form</h1>
        <form className='form' onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input type='email' required name='email'  value={data.email} onChange={handleChange}/>
            </div>
            <div>
                <label>Full name</label>
                <input required type='text' name='fullName'  value={data.fullName} onChange={handleChange}/>
            </div>
            <div>
                <label>Password</label>
                <input required type='password' name='password' value={data.password} onChange={handleChange}/>
            </div>
            <button type='submit'>Sign up</button>
        </form>

    </div>
  )
}

export default Signup