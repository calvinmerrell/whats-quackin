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
        <div className="products-container">
            <h1 classname="page-header">Available Duck Calls</h1>
            {products.map((product) => (
                <div className="product-link" to={`/DuckCalls/${product.product_id}`}>
                    {/* <p className="product-details">{product.image}</p> */}
                    <p className="product-details"> The {product.product_name} </p>
                    <p className="product-details">{product.call_style} </p>
                    <p className="product-details">{product.wood_type} wood</p>
                    <p className="product-details">${product.price}</p>
                    <p className="product-details">{product.quantity} in stock</p>
                    <button className="shop-button">Add to Cart</button>
                    
                </div>
            ))}
            
        </div>
    )
}


export default DuckCalls