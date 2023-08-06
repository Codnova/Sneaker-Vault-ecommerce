import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import '../styles/ItemCard.css'

function ItemCard({id, title, description, price, image, stock, rating}) {
  
  return (
      <Card className="h-100" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} style={{padding:'2rem', maxHeight:'18.75rem', aspectRatio: "1/1"}}  />
        <Card.Body>
          <Card.Title className="cardTitle">{title}</Card.Title>
          <Card.Text className="cardText">
            
          </Card.Text>
          <Card.Text>
            <strong>Price: ${price}</strong> <span className="text-body-secondary">({stock} in stock)</span>
          </Card.Text>
          <Card.Text>
            <strong>Rating: {rating.rate}⭐</strong> <span className="text-body-secondary">({rating.count})</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Stack className="mt-2 mb-2 gap-2">  
            <Button className="" variant="dark">Ver Detalles</Button>
          </Stack>
        </Card.Footer>
      </Card> 
  )

}

export default ItemCard;