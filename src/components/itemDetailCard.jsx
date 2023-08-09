import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import ItemCount from './itemCount';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';
import '../styles/ItemCard.css'

function ItemDetailCard({product}) {
  
  const [quantity, setQuantity] = useState(0);
  
  if (!product) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }

  function handleOnAdd(quantityToAdd) {

    setQuantity(quantityToAdd);

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
            <ItemCount 
            initial={1} 
            stock={product.stock} 
            onAdd={handleOnAdd}
            />  
          </Stack>
        </Card.Footer>
      </Card> 
  )

}

export default ItemDetailCard;