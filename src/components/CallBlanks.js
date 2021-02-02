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
                <Link className="product-link" to={`/products/${products.product_id}`}>
                    <p>
                        {products.product_name}
                        {products.wood_type}
                        {products.price}
                        {products.quantity}
                    </p>
                </Link>
            ))}
            <p> Call Blanks here </p>
        </div>
    )
}


export default Products