import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import ItemDetailCard from './itemDetailCard';
import { useState, useEffect } from 'react';
import { getProductsById } from './asyncMock';


function ItemDetailList() {

  const [product, setProduct] = useState(0);

	useEffect(() => {
    // Obtenemos los productos de la API
    getProductsById(1)
			.then(response => {
				setProduct(response);
			})
			.catch((error) => console.error(error));
  }, []);
  
  if (!product) { // If product is null, return loading state
    return <div>Loading...</div>
  }

  console.log(product.rating.rate);

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
