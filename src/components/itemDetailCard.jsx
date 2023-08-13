import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import ItemCount from './itemCount';
import Spinner from 'react-bootstrap/Spinner';
import {Link}  from 'react-router-dom/dist/';
import { CartContext } from '../context/CartContext';
import { useContext, useState } from 'react';
import '../styles/ItemCard.css'

function ItemDetailCard({product}) {
  
  const [quantity, setQuantity] = useState(0);

  const {addItem} = useContext(CartContext)
  
  if (!product) { //Component Loader Spinner
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }

  function handleOnAdd(quantity) {

    console.log("quantity en handleOnAdd", quantity )

    setQuantity(quantity);

    const item = {
      itemId: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    }

    addItem(item, quantity);

  }

  return (
      <Card className="h-100" style={{ width: '22rem' }}>
        <Card.Img variant="top" src={product.image} style={{padding:'2rem', maxHeight:'22rem', aspectRatio: "1/1"}}  />
        <Card.Body>
          <Card.Title className="">{product.title}</Card.Title>
          <Card.Text className="detailCardText">
            {product.description}
          </Card.Text>
          <Card.Text>
            <strong>Price: ${product.price}</strong> <span className="text-body-secondary">({product.stock} in stock)</span>
          </Card.Text>
          <Card.Text>
            <strong>Rating: {product.rating.rate}⭐</strong> <span className="text-body-secondary">({product.rating.count})</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Stack className="mt-2 mb-2 gap-2">  
            {
              quantity > 0 ? (<Link role='button' className='btn btn-dark' to={'/cart'}>Checkout</Link> ) : (<ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd} />)
            }
          </Stack>
        </Card.Footer>
      </Card> 
  )

}

export default ItemDetailCard;