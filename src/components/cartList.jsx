import { Container, Row, Col, Table, Image, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import ItemCard from "./itemCard";



function CartList() {

  const {cart, clearCart, removeItem, total, totalQuantity} = useContext(CartContext)

  console.log("Carrito en CartList", cart)
  


  if (cart.length === 0) {
    return (
      <h1 className="text-center mt-5">Your Cart is Empty</h1>
    )
  }

  return (

    <Container>
      <Row>
        <Col>
          <h1 className="text-center mt-5">Your Cart</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>Cart Items</span>
          <Table>
            <thead>
              <tr>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {
              cart.map( item => (
                <tr key={item.itemId}>
                  {console.log(item.itemId)}
                  <td><Image src={item.image} style={{maxWidth: '40px'}} /></td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity * item.price}</td>
                  <td><Button onClick={()=> removeItem(item.itemId)} variant="dark">Remove</Button></td>
                </tr>
              ))
            }
            </tbody>
          </Table>         
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Grand Total</h2>
          <bold></bold>
        </Col>
      </Row>
    </Container>
  )
}

export default CartList
