import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import './style.css'

const Products = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/api/CallBlanks').then((res) => {
            setProducts(res.data)
        })
    }, []);

    return (
        <div className="products-container">
             <h1 classname="page-header">Available Call Blanks</h1>
            {products.map((product) => (
                <div className="product-link" to={`/products/${product.product_id}`}>
                    <p className="product-details">{product.wood_type} wood</p>
                    <p className="product-details">${product.price} per blank</p>
                    <p className="product-details">Quantity: {product.quantity}</p>
                    <button className="shop-button">Add to Cart</button>
                </div>
            ))}
            
        </div>
    )
}


export default Products