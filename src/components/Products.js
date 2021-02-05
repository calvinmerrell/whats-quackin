import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getAllProducts} from '../Redux/productReducer'
import Product from './Product'
import './style.css'

const Products = (props) => {
    const [products, setProducts] = useState([])
    

    useEffect(() => {
        getProducts()
    }, []);

function getProducts(){
    axios.get('/api/products').then((res) => {
        setProducts(res.data)
        console.log(res)
    })
}

    return (
        <div className="product-list">
            {products.map((product) => (
                <Product getProducts={getProducts} key={products.product_id} data={product}/>
            ))}
        </div>
    )
}

function mapStateToProps(reduxState){
    return reduxState.products
}

export default connect(mapStateToProps,{getAllProducts})(Products)