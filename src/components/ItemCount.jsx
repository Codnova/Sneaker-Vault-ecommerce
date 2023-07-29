import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';

function ItemCount({initial, stock, onAdd}) {

  const [count, setCount] = useState(initial);

  function handleDecrease () {
    
    if (count > 1) {
      setCount(count-1)
    }

  }

  function handleIncrease () {
    
    if (count > 0 && count < stock) {
      setCount(count+1)
    }

  }

  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://dummyimage.com/300x200/000/ffffff.png&text=Sneaker+Hi-Top" />
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ButtonGroup aria-label="Basic example"> 
          <Button id='decrease' onClick={handleDecrease} variant="dark">-</Button>
          <Button disabled variant="light">{count}</Button>
          <Button id='increase' onClick={handleIncrease} variant="dark">+</Button>
          <Button id='addCart' onClick={()=> onAdd(count)} variant="dark">Add to cart</Button>
        </ButtonGroup>
      </Card.Body>
    </Card> 
 
  )
}

export default ItemCount;