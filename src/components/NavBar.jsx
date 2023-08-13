import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CartWidget from './cartWidget';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.svg';



function NavBar() {
	return (
		<Navbar expand="lg" data-bs-theme="dark" className="bg-dark p-3">
			<Container>
				<Link to={'/'} className='navbar-brand'>
					<Image src={logo} alt="sneaker vault" fluid/>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto gap-3">
						<NavLink to={`/category/men`} className={"nav-link"} >Men</NavLink>
						<NavLink to={`/category/women`} className={"nav-link"} >Women</NavLink>
						<NavLink to={`/category/electronics`} className={"nav-link"} >Electronics</NavLink>
						<Form className="me-auto d-flex">
							<Form.Control
								type="search"
								placeholder="Search for products"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-light">Search</Button>
						</Form>
						<Link to={'/cart'}><CartWidget /></Link>
						
					</Nav>
					
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavBar;
