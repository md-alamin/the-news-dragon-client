import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import LeftNav from '../pages/Shared/LefNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const Main = () => {
	return (
		<div>
			<Header></Header>
			<NavigationBar></NavigationBar>
			<Container>
				<Row>
					<Col lg={3}>
						<LeftNav></LeftNav>
					</Col>
					<Col lg={6}>
						<Outlet />
					</Col>
					<Col lg={3}>
						<RightNav></RightNav>
					</Col>
				</Row>
			</Container>
			<Footer></Footer>
		</div>
	);
};

export default Main;
