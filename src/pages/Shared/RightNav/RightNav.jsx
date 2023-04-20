import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {
	FaGoogle,
	FaGithub,
	FaFacebook,
	FaInstagram,
	FaTwitter,
} from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
	return (
		<div>
			<div>
				<h4 className="mb-3">Login With</h4>
				<Button variant="outline-primary d-flex align-items-center justify-content-center gap-1 w-100">
					<FaGoogle></FaGoogle> Login with Google
				</Button>
				<Button variant="outline-secondary d-flex align-items-center justify-content-center gap-1 w-100 mt-2">
					<FaGithub></FaGithub> Login with Github
				</Button>
			</div>
			<div className="mt-5">
				<h4 className="mb-3">Find Us On</h4>
				<ListGroup>
					<ListGroup.Item className="d-flex align-items-center gap-1">
						<FaFacebook className="text-primary"></FaFacebook> Facebook
					</ListGroup.Item>
					<ListGroup.Item className="d-flex align-items-center gap-1">
						<FaInstagram className="text-danger" /> Instagram
					</ListGroup.Item>
					<ListGroup.Item className="d-flex align-items-center gap-1">
						<FaTwitter className="text-primary"></FaTwitter>Twitter
					</ListGroup.Item>
				</ListGroup>
			</div>
			<QZone />
		</div>
	);
};

export default RightNav;
