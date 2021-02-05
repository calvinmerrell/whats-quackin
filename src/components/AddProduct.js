import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button } from "react-bootstrap"
import './style.css'

const AddProducts = (props) => {
    const [message, setMessage] = useState('')
    const [product_type, setProductType] = useState('')
    const [product_name, setProductName] = useState('')
    const [call_style, setCallStyle] = useState('')
    const [wood_type, setWoodType] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [image, setImage] = useState('')


    function handleAddProduct() {
        let newProduct = { product_type, product_name, call_style, wood_type, price, quantity, image }
        axios.post(`/api/AddProduct`, newProduct)
            .then((res) => {
            setMessage(product_type + " added")
            setTimeout(() => {
                setMessage('')
            }, 2000)
        })
    }

    return (
        <div className="products-container">
            <Form className="add-product-form">
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label></Form.Label>
                    <Form.Control size="lg" placeholder="Call Type" as="select" onChange={(e) => setProductType(e.target.value)} value={product_type}>
                        <option>Select Call Type</option>
                        <option>Duck_Call</option>
                        <option>Goose_Call</option>
                        <option>Call_Blank</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="productName">
                    <Form.Label></Form.Label>
                    <Form.Control size="lg" type="productName" placeholder="Call Name" onChange={(e) => setProductName(e.target.value)} value={product_name}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label></Form.Label>
                    <Form.Control size="lg" as="select" onChange={(e) => setCallStyle(e.target.value)} value={call_style}>
                        <option>Select Call Style</option>
                        <option>Single Reed</option>
                        <option>Double Reed</option>
                        <option>Short Reed</option>
                        <option>Pre Drilled</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label></Form.Label>
                    <Form.Control size="lg" as="select" onChange={(e) => setWoodType(e.target.value)} value={wood_type}>
                        <option>Select Wood Type</option>
                        <option>Black Oak</option>
                        <option>Osage Orange</option>
                        <option>Paduk</option>
                        <option>Maple</option>
                        <option>Cocobolo</option>
                        <option>Cherry</option>
                        <option>Cottonwood</option>
                        <option>Black Ivory</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="productPrice" onChange={(e) => setPrice(e.target.value)} value={price}>
                    <Form.Label></Form.Label>
                    <Form.Control size="lg" type="productPrice" placeholder="Price" />
                </Form.Group>

                <Form.Group controlId="Quantity" onChange={(e) => setQuantity(e.target.value)} value={quantity}>
                    <Form.Label></Form.Label>
                    <Form.Control size="lg" type="Quantity" placeholder="Quantity" />
                </Form.Group>

                <Form.Group controlId="Image" onChange={(e) => setImage(e.target.value)} value={image}>
                    <Form.Label></Form.Label>
                    <Form.Control  size="lg" placeholder="Image"/>
                </Form.Group>

                

                
                <Button variant="primary" type="submit" className="shop-button" onClick={() => handleAddProduct()}>  Add Product
                </Button>
                
            </Form>
        <p>
        {message}
        </p>
        </div >
        
    )
}

export default AddProducts;
