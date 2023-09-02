import ItemCard from './ItemCard';
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';

function ItemList ({products}) {

  if (!products) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }

  return (
    <>
      {products.map((item) => (
      <Col md="auto" key={item.id}>
        
          <ItemCard 
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            stock={item.stock}
            rating={item.rating}    
          />
        
      </Col>
      ))}     
    </>
  )
}

export default ItemList;