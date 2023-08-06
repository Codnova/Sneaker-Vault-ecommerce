import ItemCard from './itemCard';
import Col from 'react-bootstrap/Col';

function ItemList ({products}) {

  if (!products) {
    return <h1 className='text-center'>Loading...</h1>
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