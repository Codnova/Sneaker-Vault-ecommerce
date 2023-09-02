import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function CheckoutForm({onConfirm}) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleConfirm = (event) => {

    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
      address
    };
    onConfirm(userData);
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={6}>
        <Form onSubmit={handleConfirm}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your name..." value={name} onChange={({target})=> setName(target.value) } />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="example@me.com..." value={email} onChange={({target})=> setEmail(target.value) } />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" placeholder="(321) 300-4040" value={phone} onChange={({target})=> setPhone(target.value) } />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Av. Libertador 2433" value={address} onChange={({target})=> setAddress(target.value) }  />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default CheckoutForm