// Este componente contendrá la lista de articulos del ecommerce

import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemList from './itemList';
import {getProducts} from "./asyncMock";
import { useState, useEffect } from 'react';
import '../styles/ItemListContainer.css';

function ItemListContainer ({greetings}) {

	const [products, setProducts] = useState([]);

	useEffect(() => {
    // Obtenemos los productos de la API
    
		getProducts()
			.then(response => {
				setProducts(response);
			})
			.catch((error) => console.error(error));
		
  }, []);
	
	return (
		
			<Container >
				<Row>
					<Col>
						<h1 className="text-center mt-5">{greetings}</h1>
					</Col>
				</Row>
				<Row className="">
						<div className="d-flex p-5 gap-3 justify-content-center  flex-row flex-wrap">
							<ItemList products={products} />
						</div>
				</Row>
			</Container>
		
	)

}

export default ItemListContainer;