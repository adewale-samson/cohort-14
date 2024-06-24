import axios from 'axios'


export const appInstance = axios.create({
    baseURL: 'https://medical-records-app-1.onrender.com',
    timeout: '50000',
    headers: {
        'Content-Type': 'application/json',
    }
})