import React, { useEffect, useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { SignupAction } from '../../api/auth'
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import { SyncLoader } from 'react-spinners'

const Signup = () => {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
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
        setLoader(true)
        const isValid = handleValidation()
        axios.post('https://medical-records-app-1.onrender.com/api/v1/admin/create', data)
        .then(response => {
            console.log(response);
            toast.success(response.data.message)
            setLoader(false)
            if (response.status === 201) {
                setInterval(() => {
                    
                    navigate('/about')
                }, 2000);
            }
        })
        .catch(error => {
            console.log(error);
            toast.error(error.response.data.message)
        })
        .finally(() => {
            setLoader(false)
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
            <button type='submit'>{loader? <SyncLoader size={8} color='#142345'/>: 'Sign up'}</button>
        </form>

    </div>
  )
}

export default Signup