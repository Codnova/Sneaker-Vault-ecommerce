import { Container, Row, Col, Table, Image, Button } from "react-bootstrap";

function Checkout() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-3 text-center">Checkout</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          Your Address
        </Col>
        <Col>
          Your Items
        </Col>
      </Row>
    </Container>
  )
}

export default Checkout