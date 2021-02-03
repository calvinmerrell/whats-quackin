import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './style.css'

const Products = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/api/GooseCalls').then((res) => {
            setProducts(res.data)
        })
    }, []);

    return (
        <div>
            {products.map((product) => (
                <Link className="product-link" to={`/products/${product.product_id}`}>
                    <p>{product.product_name}{product.call_style}{product.wood_type}{product.price}</p>
                </Link>
            ))}
            
            <button>Add to Cart</button>
        </div>
    )
}


export default Products