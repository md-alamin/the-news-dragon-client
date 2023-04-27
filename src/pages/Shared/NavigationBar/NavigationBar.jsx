import React from 'react';
import { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
	const { user } = useContext(AuthContext);
	return (
		<Container className="mb-3">
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mx-auto">
							<Link to="/" className="nav-link">
								Home
							</Link>
							<Link to="/about" className="nav-link">
								About
							</Link>
							<Link to="/contact" className="nav-link">
								Contact
							</Link>
						</Nav>
						<Nav>
							{user && (
								<Link className="nav-link">
									<FaUserCircle style={{ fontSize: '26px' }}></FaUserCircle>
								</Link>
							)}
							{user ? (
								<Button variant="danger" className="mx-1 py-2 px-5">
									Logout
								</Button>
							) : (
								<Link to="/login">
									<Button variant="primary" className="mx-2 py-2 px-5">
										Login
									</Button>
								</Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
};

export default NavigationBar;
