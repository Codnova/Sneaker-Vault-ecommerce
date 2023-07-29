// Este componente contendrá la lista de articulos del ecommerce

import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from "./ItemCount.jsx";
import "../styles/ItemListContainer.css";

function ItemListContainer ({greetings}) {
	
	return (
		<div>
			<Container fluid>
				<Row>
					<Col>
						<h1 className="text-center mt-3">{greetings}</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<ItemCount initial={1} stock={5} onAdd={(quantity) => console.log ("cantidad agregada", quantity)} />
					</Col>
				</Row>
			</Container>
		</div>
	)

}

export default ItemListContainer;