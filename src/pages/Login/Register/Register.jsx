import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div>
			<h3 className="text-center mt-3 py-3">Please Register</h3>
			<Form className="w-25 mx-auto">
				<Form.Group className="mb-3" controlId="formBasicText">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						name="name"
						required
						placeholder="Enter name"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicText">
					<Form.Label>Photo URL</Form.Label>
					<Form.Control
						type="text"
						name="photo"
						required
						placeholder="Enter photo"
					/>
				</Form.Group>
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
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check
						type="checkbox"
						name="accept"
						label="Accept Terms and Conditions"
					/>
				</Form.Group>
				<Button variant="primary" type="submit" className="d-block">
					Register
				</Button>
				<Form.Text>
					Already have an account?
					<Link to="/login" className="text-primary">
						Login
					</Link>
				</Form.Text>
				<Form.Text className="text-danger"></Form.Text>
				<Form.Text className="text-success"></Form.Text>
			</Form>
		</div>
	);
};

export default Register;
