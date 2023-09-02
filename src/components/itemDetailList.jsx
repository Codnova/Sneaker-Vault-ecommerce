import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import ItemDetailCard from './ItemDetailCard';
import Spinner  from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';
import  {getDoc, doc} from 'firebase/firestore';
import {db} from '../services/firebase'
import { useParams } from 'react-router-dom';

function ItemDetailList() {

  const [product, setProduct] = useState(null);

  let {itemId} = useParams();
  
  useEffect( () => {

    const docRef = doc(db, 'products', itemId)

    getDoc(docRef)
      .then(response => {
        const data = response.data();
        const productAdapted = {id: response.id, ...data}
        setProduct(productAdapted)
      })
      .catch(error => console.log("Error: ", error))
    
  }, [itemId]);

  return (

    <Container >
      <Row>
        <Col>
          <h1 className="text-center mt-5">Detailed Product View</h1>
        </Col>
      </Row>
      <Row className="">
          <div className="d-flex p-5 gap-3 justify-content-center  flex-row flex-wrap">
            {product ? <ItemDetailCard product={product} /> : <Spinner/>}
          </div>
      </Row>
    </Container>

  )
}

export default ItemDetailList;

