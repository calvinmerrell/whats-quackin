import { Form, Button } from "react-bootstrap"
import './style.css'

const AddProducts = (props) => {
    return (
        <div>
            <Form className="add-product-form">
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label></Form.Label>
                    <Form.Control placeholder="Call Type" as="select" >
                        <option>Duck Call</option>
                        <option>Goose Call</option>
                        <option>Call Blanks</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="productName">
                    <Form.Label>Product Name </Form.Label>
                    <Form.Control type="productName" placeholder="Call Name" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Call Style </Form.Label>
                    <Form.Control as="select">
                        <option>Single Reed</option>
                        <option>Double Reed</option>
                        <option>Short Reed</option>
                        <option>Pre Drilled</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Type of Wood </Form.Label>
                    <Form.Control as="select">
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

                <Form.Group controlId="productPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="productPrice" placeholder="Price" />
                </Form.Group>

                <Form.Group>
                    <Form.File id="ImageSelector" label="Select Image" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Add Product
                </Button>
            </Form>
        </div >
    )
}

export default AddProducts;
