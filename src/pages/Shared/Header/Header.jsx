import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
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
		</Container>
	);
};

export default Header;
