import { Container, Row, Col, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./cartItem";

function CartList() {
  const { cart, clearCart, total } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mt-5">Your Cart is Empty</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mt-5">Your Cart</h1>
        </Col>
      </Row>
      {cart.map(item => (
        <CartItem key={item.itemId} item={item} />
      ))}
      <Row className="d-flex justify-content-center flex-column align-items-center mt-3">
        <Col xs={'auto'}>
            <h3 className="text-center mb-2">Total: ${total}</h3>
        </Col>
        <Col xs={'auto'}>
          <Link to="/checkout" className="btn btn-dark mb-2">
            Checkout
          </Link>
        </Col>
        <Col xs={'auto'}>
          <Button variant="danger" onClick={() => clearCart()} className="mb-2">
            Clear Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CartList;
