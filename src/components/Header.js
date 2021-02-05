import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { loginUser } from '..//Redux/userReducer'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './style.css'

const Header = (props) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=>{
        axios.get('/auth/user').then((res)=>{
            dispatch(loginUser(res.data))
            setIsLoggedIn(true)
        })
    },[dispatch])

    useEffect(()=>{
        if(props.user.username) setMessage("Welcome " + props.user.username)
    },[props.user.username])

    const handleLogin = () => {
        setMessage("")
        const body = {
            username: username,
            password: password
        }
        axios.post('/auth/login', body).then(
            (res) => {
                dispatch(loginUser(res.data))
                history.push('/')
                setUsername("")
                setPassword("")
                setMessage("~" + username + "~")
                setIsLoggedIn(true)
            })
            .catch(() => {
                setMessage("Credentials don't match")
                setIsLoggedIn(false)
                setTimeout(() => {
                    setMessage('')
                }, 2000)
            })
    }
    const handleLogout = () => {
        axios.delete('/auth/logout').then(
            (res) => {
                setMessage("Happy Hunting" + username)
                setIsLoggedIn(false)
                setTimeout(() => {
                    setMessage('')
                }, 2000)
            }
        )
    }

    return (
        <header className="App-header">
            <h1 className="header-title">What's Quackin</h1>
                    <p className="message">
                        {message}
                    </p>
            <nav className="nav-list">
                <ul className="header-links">
                    <Link className="component-link" to='/'>
                        <li>Home</li>
                    </Link>

                    {props.user.is_admin ? (<Link className="component-link" to='/Products'>
                        <li>Products</li>
                    </Link>) : null}

                    {props.user.is_admin ? (<Link className="component-link" to='/AddProduct'>
                        <li>Add Product</li>
                    </Link>) : null}

                    <Link className="component-link" to='/DuckCalls'>
                        <li>Duck Calls</li>
                    </Link>

                    <Link className="component-link" to='/GooseCalls'>
                        <li>Goose Calls</li>
                    </Link>

                    <Link className="component-link" to='/CallBlanks'>
                        <li>Call Blanks</li>
                    </Link>

                    <Link to='/cart'>
                        <img className="cart-icon" 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ138X6fIgCeQhf8ABwojifKMYFCC13rDT7qg&usqp=CAU"></img>
                    </Link>
                </ul>
                <div className="login-container">

                    {!isLoggedIn &&
                        <>
                            <input required value={username} className="login-inputs" placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>


                            <input required type="password" value={password} className="login-inputs" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
                        </>}


                    {!isLoggedIn && <Button variant="primary" className="auth-button" onClick={handleLogin}>Log in</Button>
                    }

                    {isLoggedIn && <Button variant="primary" className="auth-button" onClick={handleLogout}>Log out</Button>}

                    {!isLoggedIn && <Link className="component-link" to='/register'>
                        <p>Register</p>
                    </Link>}
                </div>


            </nav>
        </header>
    )
}
function mapStateToProps(reduxState) {
    return reduxState.user
}

export default connect(mapStateToProps)(withRouter(Header))