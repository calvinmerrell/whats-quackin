import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import './style.css'

const Home = (props) => {
    return (
        <div className="home-body">
            
            <Link to='/DuckCalls'>
                <div className="duck_section" id="duckCalls">
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMbVGqSfquPfYrp2hK0DUvIUY1Nn1Kwwl6eA&usqp=CAU" id="bg" alt=""></img> */}
                    <p className="shop-button">Shop Duck Calls</p>
                </div>
            </Link>

            <Link to='/GooseCalls'>
                <div className="goose_section" id="gooseCalls">
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5vjmJvJzXcLNYW84nekBPdeYukxTB0fAOw&usqp=CAU" id="bg" alt=""></img> */}
                    <p className="shop-button">Shop Goose Calls</p>
                </div>
            </Link>

            <Link to='/CallBlanks'>
                <div className="blanks_section" id="callBlanks">
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4h3A_eOmCI4Kp6p_jFrka1INqcvke5W13Q&usqp=CAU" id="bg" alt=""></img> */}
                    <p className="shop-button">Shop Call Blanks</p>
                </div>
            </Link>
        </div>

    )
}
export default withRouter(Home)