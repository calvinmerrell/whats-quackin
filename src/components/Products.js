import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
// import {getAllProducts} from '../Redux/productReducer'
import Product from './Product'
import './style.css'

const Products = (props) => {
    const [products, setProducts] = useState([])
    
    function getProducts(){
        axios.get('/api/products').then((res) => {
            console.log(res.data)
            setProducts(res.data)
        })
    }   
    
    useEffect(() => {
        getProducts()
    }, []);

    return (
        <div className="products-container">
            {products.map((product) => (
                <Product getProducts={getProducts} key={product.product_id} data={product}/>
            ))}
        </div>
    )
}

function mapStateToProps(reduxState){
    return reduxState.products
}

export default connect(mapStateToProps)(Products)