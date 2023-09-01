import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemList from './itemList';
import  {getDocs, collection, query, where} from 'firebase/firestore';
import {db} from '../services/firebase'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../styles/ItemListContainer.css';

function ItemListContainer ({greetings}) {

	const [products, setProducts] = useState(null);
	const {categoryId} = useParams();

	useEffect(() => {

		const collectionRef = categoryId
			? query(collection(db, 'products'), where('category', '==', categoryId))
			: collection (db, 'products')


		getDocs(collectionRef)
			.then(response => {
				const productsAdapted = response.docs.map(doc =>{
					const data = doc.data()
					return {id: doc.id, ...data}
				})
				setProducts(productsAdapted)
			})
			.catch((error) => console.error(error));

  }, [categoryId]);

	if (!greetings) {
		greetings =  categoryId.toLocaleUpperCase(); // Para mostrar el nombre de la categoria en la pagina
	}
	
	return (
		
		<Container >
			<Row>
				<Col>
					<h1 id="h1" className="text-center mt-3">{greetings}</h1>
				</Col>
			</Row>
			<Row className="">
					<div className="d-flex p-4 gap-3 justify-content-center  flex-row flex-wrap">
						<ItemList products={products} />
					</div>
			</Row>
		</Container>
		
	)

}

export default ItemListContainer;