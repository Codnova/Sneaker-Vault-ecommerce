import { Container, Row, Col, Table, Image, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import "../styles/CartList.css";

function CartList() {

  const {cart, clearCart, removeItem, total} = useContext(CartContext)

  console.log("Carrito en CartList", cart)

  if (cart.length === 0) {
    return (

      <Container>
        <Row>
          <Col>
            <h1 className="text-center mt-5">Your Cart is Empty</h1>
          </Col>
        </Row>
      </Container>
      
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
        <Table responsive hover size="sm">
            <thead>
              <tr>
                <th></th>
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
                  <td className="itemName">{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.quantity * item.price}</td>
                  <td><Button onClick={()=> removeItem(item)} variant="dark">Remove</Button></td>
                </tr>
              ))
            }
            </tbody>
          </Table> 
        </Col>
        <Row>
        <Col className="d-flex justify-content-center">
          <Button variant="danger" onClick={ ()=> clearCart() } >Clear Cart</Button>
        </Col>
        </Row>
      </Row>
      <hr/>
      <Row>
        <Col>
          <h2 className="text-center mt-3">Grand Total</h2>
          <h3 className="text-center mt-3"><span className="text-success">Total: ${total}</span></h3>
        </Col>
      </Row>
    </Container>
  )
}

export default CartList

