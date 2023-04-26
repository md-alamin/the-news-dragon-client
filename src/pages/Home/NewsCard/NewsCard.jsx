import moment from 'moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {
	FaBeer,
	FaRegBookmark,
	FaRegEye,
	FaRegStar,
	FaShareAlt,
	FaStar,
} from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
	const { title, details, _id, image_url, author, total_view, rating } = news;

	return (
		<Card className="my-4">
			<Card.Header className="d-flex align-items-center">
				<Image
					className="me-1"
					style={{ height: '40px' }}
					src={author?.img}
					roundedCircle
				/>
				<div className="flex-grow-1">
					<p className="my-0">{author?.name}</p>
					<p className="my-0">
						<small>
							{moment(author.published_date).format('Do MMMM YYYY')}
						</small>
					</p>
				</div>
				<div>
					<FaRegBookmark></FaRegBookmark>
					<FaShareAlt></FaShareAlt>
				</div>
			</Card.Header>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Img variant="top" src={image_url} />
				<Card.Text>
					{details.length < 250 ? (
						<>{details}</>
					) : (
						<>
							{details.slice(0, 250)}...{' '}
							<Link className="d-block link-warning" to={`/news/${_id}`}>
								Read More
							</Link>
						</>
					)}
				</Card.Text>
			</Card.Body>
			<Card.Footer className="text-muted d-flex">
				<div className="flex-grow-1">
					<Rating
						placeholderRating={rating?.number}
						emptySymbol={<FaRegStar></FaRegStar>}
						placeholderSymbol={<FaStar className="text-warning"></FaStar>}
						readonly
					></Rating>
				</div>
				<div>
					<FaRegEye className="me-1"></FaRegEye>
					{total_view}
				</div>
			</Card.Footer>
		</Card>
	);
};

export default NewsCard;
