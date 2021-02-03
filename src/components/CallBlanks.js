import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './style.css'

const Products = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/api/CallBlanks').then((res) => {
            setProducts(res.data)
        })
    }, []);

    return (
        <div>
            {products.map((product) => (
                <Link className="product-link" to={`/products/${product.product_id}`}>
                    <p>{product.wood_type}</p>
                    <p>{product.price}</p>
                    <p>{product.quantity}</p>
                </Link>
            ))}
            <button>Add to Cart</button>
        </div>
    )
}


export default Products