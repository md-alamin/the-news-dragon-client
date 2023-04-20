import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/categories')
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((e) => console.log(e));
	}, []);

	return (
		<div>
			<h4 className="mb-3">All Category</h4>
			{categories.map((category) => (
				<p key={category.id}>
					<Link
						to={`/category/${category.id}`}
						className="text-decoration-none text-secondary ps-3"
					>
						{category.name}
					</Link>
				</p>
			))}
		</div>
	);
};

export default LeftNav;
