import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import './style.css'

const Register = (props) => {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleRegister = () => {
        const body = {
            username: username,
            password: password,
            first_name: first_name,
            last_name: last_name,
            email: email
        }
        axios.post('/auth/register', body).then(
            (res) => {
                console.log(res.data)
                setUsername("")
                setPassword("")
                setFirst_name("")
                setLast_name("")
                setEmail("")
                setMessage("You are now registered")
                setTimeout(() => {
                    setMessage('')
                }, 4000)
                history.push('/')
            })
    }

    return (
        <div className="register-container">
            <p>{message}</p>
            <div >
                <input className="registration-inputs" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            <div>
                <input className="registration-inputs" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>

            </div>
            <div>
                <input className="registration-inputs" placeholder="First Name" onChange={(e) => setFirst_name(e.target.value)}></input>

            </div>
            <div>
                <input className="registration-inputs" placeholder="Last Name" onChange={(e) => setLast_name(e.target.value)}></input>

            </div>
            <div>
                <input className="registration-inputs" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div>
                <Button className="auth-button" variant="primary" onClick={handleRegister}>Register</Button>

            </div>
        </div>


    )
}
export default withRouter(Register)