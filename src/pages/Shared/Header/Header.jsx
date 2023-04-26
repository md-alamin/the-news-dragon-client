import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Container className="mb-4">
			<div className="text-center mt-5">
				<Link to="/">
					<img src={logo} alt="" />
				</Link>
				<p className="text-secondary">
					<small>Journalism Without Fear Or Favor</small>
				</p>
				<p>{moment().format('dddd, MMM D, YYYY')}</p>
			</div>
			<div className="d-flex bg-light p-2">
				<Button variant="danger text-nowrap">Latest</Button>
				<Marquee className="text-danger" gradient={false}>
					I can be a React component, multiple React components, or just some
					text. I can be a React component, multiple React components, or just
					some.&nbsp;
				</Marquee>
			</div>
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
							<Link className="nav-link">Profile</Link>
							<Button variant="secondary" className="mx-2 py-2 px-5">
								Login
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
};

export default Header;
