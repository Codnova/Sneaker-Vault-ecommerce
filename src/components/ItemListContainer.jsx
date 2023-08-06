import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemList from './itemList';
import {getProducts, getProductsByCategory} from "./asyncMock";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../styles/ItemListContainer.css';

function ItemListContainer ({greetings}) {

	const [products, setProducts] = useState([]);
	const {categoryId} = useParams();

	useEffect(() => {

		const asyncFunction = categoryId ? getProductsByCategory : getProducts;
		asyncFunction(categoryId) // Obtenemos los productos de la API por su categoria
			.then(response => {
				setProducts(response);
			})
			.catch((error) => console.error(error));
		
  }, [categoryId]);

	if (!greetings) {
		greetings =  categoryId.toLocaleUpperCase();
	}
	
	return (
		
		<Container >
			<Row>
				<Col>
					<h1 id="h1" className="text-center mt-5">{greetings}</h1>
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