import axios from 'axios'
// import {data} from '../data.js'




const API_URL = "https://regres.in/api/"
const login = (email, password) => {
    const qs = require('qs')
    const data = qs.stringify({email: email, password: password})
    const config = {
        method:'post',
        url: API_URL+'login',
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    }

    return axios(config)
            .then((response) =>{
            if(response.data){
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data
    })
}


const tmpConnect = (email, password) =>{
    // const qs = require('qs')
    // const data = qs.stringify({email: email, password: password})
    // localStorage.setItem("user", JSON.stringify(data))
    localStorage.setItem("user", JSON.stringify(email, password))
}



const logout = () => {
    localStorage.removeItem("user");
    window.location.reload()
}

const AuthService = {login, logout, tmpConnect }
export default AuthService