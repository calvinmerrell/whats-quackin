import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import './style.css'

const Register = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [message, setMessage] = useState('')

    const handleRegister = () => {
        const body = {
            username: username,
            password: password,
            first_name: first_name,
            last_name: last_name
        }
        axios.post('/auth/register', body).then(
            (res) => {
                console.log(res.data)
                setUsername("")
                setPassword("")
                setFirst_name("")
                setLast_name("")
                setMessage("You are now registered")
            })
    }

    return (
        <div className="container">
            <p>{message}</p>
            <div className="row">
                <div className="col">
                    <input className="registration-inputs" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input className="registration-inputs" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input className="registration-inputs" placeholder="First Name" onChange={(e) => setFirst_name(e.target.value)}></input>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input className="registration-inputs" placeholder="Last Name" onChange={(e) => setLast_name(e.target.value)}></input>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Button variant="primary" onClick={handleRegister}>Register</Button>
                </div>
            </div>
        </div>


    )
}
export default withRouter(Register)