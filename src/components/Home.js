import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import './style.css'

const Home = (props) => {
    return (
        <div>
            <p className="product_section" id="duckCalls">
                SECTION for Duck Calls
                <Link className="App-link" to='/DuckCalls'>
                <button className="shop-button">Shop Duck Calls</button>
                </Link>
            </p>

            <p className="product_section" id="gooseCalls">
                SECTION for Goose Calls
                <Link className="App-link" to='/GooseCalls'>
                <button className="shop-button">Shop Goose Calls</button>
                </Link>
            </p>

            <p className="product_section" id="callBlanks">
                SECTION for Call Blanks
                <Link className="App-link" to='/CallBlanks'>
                    <button className="shop-button">Shop Call Blanks</button>
                </Link>
            </p>
        </div>

    )
}
export default withRouter(Home)