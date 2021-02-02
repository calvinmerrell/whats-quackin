import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './style.css'

const DuckCalls = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/api/DuckCalls').then((res) => {
            setProducts(res.data)
        })
    }, []);

    return (
        <div>
            {products.map((product) => (
                <Link className="product-link" to={`/DuckCalls/${products.product_id}`}>
                    <p>{products.product_name}{products.call_style}{products.wood_type}{products.price}</p>
                </Link>
            ))}
            <p> duck Call here </p>
        </div>
    )
}


export default DuckCalls