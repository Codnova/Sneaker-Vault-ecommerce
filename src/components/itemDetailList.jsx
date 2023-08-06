import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import ItemDetailCard from './itemDetailCard';
import { useState, useEffect } from 'react';
import { getProductsById } from './asyncMock';
import { useParams } from 'react-router-dom';

function ItemDetailList() {

  const [product, setProduct] = useState(null);

  let {itemId} = useParams();
  itemId = parseInt(itemId);
	
  useEffect( () => {
    
    getProductsById(itemId) // Obtenemos los productos de la API por su itemId
			.then(response => {
				setProduct(response);
			})
			.catch((error) => console.error(error));
  }, [itemId]);

  console.log(itemId);

  return (

    <Container >
      <Row>
        <Col>
          <h1 className="text-center mt-5">Detailed View</h1>
        </Col>
      </Row>
      <Row className="">
          <div className="d-flex p-5 gap-3 justify-content-center  flex-row flex-wrap">
            <ItemDetailCard product={product} />
          </div>
      </Row>
    </Container>

  )
}

export default ItemDetailList;
