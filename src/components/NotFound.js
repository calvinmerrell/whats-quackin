import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = (props) => {
    return (
        <div>
        <h1> Page could not be found. </h1>
        <Link to='/home'>Return to Home page</Link>
        </div>
    )
}

export default NotFound