import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import './style.css'

const Product = (props) => {
    const {product_id, product_type, call_style, wood_type, price,quantity} = props.data
    const [inputText, SetInputText] = useState('')
    const [showEdit, SetShowEdit] = useState(false)

    function handleSave() {
        const body = { price: inputText }
        axios.put(`/api/Products/${product_id}`, body).then((res) => {
            props.getProducts()
            SetShowEdit(false)
        })
    }

    function handleDelete() {
        axios.delete(`/api/Products/${product_id}`)
        .then((res) => {props.getProduct()
            }
        )
    }


    return (
        <div className="product row">
            
            <div className="col-2">
                {moment(date).format("DD/MM/YYYY")} </div>

            <div className="col-3">{product_type}</div>
            <div className="col-2">{call_style}</div>
            <div className="col-2">{wood_type}</div>
            <div className="col-2">{quantity}</div>
            <div className="col-2">{price}</div>

            { showEdit ? (
                <p><input onChange={(e) => SetInputText(e.target.value)} value={inputText} />
                    <button onClick={handleSave}>Save</button></p>) : null
            }

            <Button variant="primary" className="ctrlbuttons" onClick={() => SetShowEdit(true)}> Edit </Button>

            <Button variant="primary" className="ctrlbuttons" onClick={() => handleDelete()}>Remove </Button>

        </div>
    )
}

export default Product