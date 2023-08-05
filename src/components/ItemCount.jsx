import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';

function ItemCount({initial, stock, onAdd}) {

  const [count, setCount] = useState(initial);

  function handleDecrease () {
    
    if (stock === 0) {
      alert("No hay stock del producto");
    }

    if (count > 1) {
      setCount(count-1)
    }

  }

  function handleIncrease () {
    
    if (stock === 0) {
      alert("No hay stock del producto");
    }

    if (count > 0 && count < stock) {
      setCount(count+1)
    }

  }

  return (
    <ButtonGroup aria-label="Basic example"> 
      <Button id='decrease' onClick={handleDecrease} variant="dark">-</Button>
      <Button disabled variant="light">{count}</Button>
      <Button id='increase' onClick={handleIncrease} variant="dark">+</Button>
      <Button id='addCart' disabled={!stock} onClick={()=> onAdd(count)} variant="dark">Add to cart</Button>
    </ButtonGroup>
  )
}

export default ItemCount;