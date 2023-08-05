import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CartWidget from './cartWidget';
import logo from '../assets/logo.svg';



function NavBar() {
	return (
		<Navbar expand="lg" data-bs-theme="dark" className="bg-dark p-3">
			<Container>
				<Navbar.Brand href="#home">
					<Image src={logo} alt="sneaker vault" fluid/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto gap-3">
						<Nav.Link href="#home">Male</Nav.Link>
						<Nav.Link href="#link">Female</Nav.Link>
						<Nav.Link href="#link">All Products</Nav.Link>
						<Form className="me-auto d-flex">
							<Form.Control
								type="search"
								placeholder="Search for products"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-light">Search</Button>
						</Form>
						<CartWidget />
					</Nav>
					
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavBar;
