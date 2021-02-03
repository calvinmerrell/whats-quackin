import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {getAllProducts} from '../Redux/productReducer'
import './style.css'

const Products = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/api/products').then((res) => {
            setProducts(res.data)
            console.log(res)
        })
    }, []);

    useEffect(() => {
        getProduct()
    }, [getProduct])

    return (
        <div className="product-list">
            {products.map((product) => (
                <Product getProduct={getProduct} key={product.product_id} data={product}/>
            ))}
        </div>
    )
}

function mapStateToProps(reduxState){
    return reduxState.products
}

export default connect(mapStateToProps,{getAllProducts})(Products)