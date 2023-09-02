import {Card, Row, Col, Button, Image} from 'react-bootstrap'
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function CartItem({item}) {
  const { removeItem } = useContext(CartContext);

  return (
    <Card className="my-3 p-3" key={item.itemId}>
      <Row className="align-items-center">
        <Col xs={3} md={2}  className='text-center'>
          <Image src={item.image} fluid style={{ maxHeight: '80px' }} />
        </Col>
        <Col>
          <h5 style={{ fontSize: '1rem', wordBreak: 'break-word' }}>{item.title}</h5>
          <p>Unit Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Subtotal: ${item.quantity * item.price}</p>
        </Col>
        <Col xs={3} className="text-center">
          <Button variant="dark" onClick={() => removeItem(item)} className="text-nowrap btn-sm btn-block">
            Remove
          </Button>
        </Col>
      </Row>
    </Card>
  )
}
