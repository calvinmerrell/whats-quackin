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
                    <li>Duck Calls</li>
                </Link> 
            </p>
            
            <p className="product_section" id="gooseCalls">
                SECTION for Goose Calls
                  <Link className="App-link" to='/GooseCalls'>
                    <li>Goose Calls</li>
                </Link> 
            </p>

            <p className="product_section" id="callBlanks">
                SECTION for Call Blanks
                  <Link className="App-link" to='/CallBlanks'>
                    <li>Call Blanks</li>
                </Link> 
            </p>
        </div>

    )
}
export default withRouter(Home)