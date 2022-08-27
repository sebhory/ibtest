import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import AuthService from '../services/authService'
import AuthContext from './AuthProvider'

const LoginContainer =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;


    form{
        position: relative;
        width: 400px;
        height: 300px;
        border-radius: 10px;
        background-color: #ffffff;
        padding: 30px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h2{
        margin-bottom: 10px;
    }

    input, button{
        padding: 14px;
        margin-bottom: 20px;
        border-radius: 6px;
    }

    input{
        border: none;
        background-color: #add8e6c2;
        
    }

    button{
        border: none;
        cursor: pointer;
    }

    label{
        display: block;
        margin-bottom: 6px;
    }


`


function Login() {
    const {auth, setAuth} = useContext(AuthContext)
    const history = useNavigate()

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    // const [user, setUser] = useState('')
    const [filled, setFilled] = useState(false)

    useEffect(()=>{
        if(state.email !== '' && state.password !== ''){
            setFilled(true)
        }else{
            setFilled(false)
        }

    },[state.email, state.password, filled])

    const handleChange = (e) => {
        setState({
            ...state, 
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit =  (e) =>{
        e.preventDefault();
        AuthService.tmpConnect(state)
        setAuth(JSON.parse(localStorage.getItem('user')))

        if(auth.email && auth.password){
            history("/")
        }
    }

    return (
        <LoginContainer>
            <form onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
                <p>{auth?.email}</p>
                <div>
                    <label htmlFor="email">Login</label>
                    <input type="email" name="email"  onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"   onChange={handleChange} required />
                </div>
                <button type="submit" disabled={!filled}>Se Connecter</button>
            </form>
        </LoginContainer>
    )
}

export default Login