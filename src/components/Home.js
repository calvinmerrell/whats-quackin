import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import './style.css'

const Home = (props) => {
    return (
        <div className="home-body">
            <Link to='/DuckCalls'>
                <div className="duck_section" id="duckCalls">
                    <p className="shop-button">Shop Duck Calls</p>
                </div>
            </Link>

            <Link to='/GooseCalls'>
                <div className="goose_section" id="gooseCalls">
                    <p className="shop-button">Shop Goose Calls</p>
                </div>
            </Link>

            <Link to='/CallBlanks'>
                <div className="blanks_section" id="callBlanks">
                    <p className="shop-button">Shop Call Blanks</p>
                </div>
            </Link>
        </div>

    )
}
export default withRouter(Home)