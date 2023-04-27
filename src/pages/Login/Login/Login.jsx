import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<>
			<h3 className="text-center mt-3 py-3">Please Login</h3>
			<Form className="w-25 mx-auto">
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						name="email"
						required
						placeholder="Enter email"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						required
						placeholder="Password"
					/>
				</Form.Group>
				<Button variant="primary" type="submit" className="d-block">
					Login
				</Button>
				<Form.Text>
					Don't have an account?
					<Link to="/register" className="text-primary">
						Register
					</Link>
				</Form.Text>
				<Form.Text className="text-danger"></Form.Text>
				<Form.Text className="text-success"></Form.Text>
			</Form>
		</>
	);
};

export default Login;
