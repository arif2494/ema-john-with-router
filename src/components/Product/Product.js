import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faStar } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
const Product = (props) => {
	const { name, img, price, stock, seller, star } = props.product;
	const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} />;
	const fullStar = <FontAwesomeIcon icon={faStar} />;
	const emptyStart = <FontAwesomeIcon icon={farStar} />;

	return (
		<div className="product">
			<img src={img} alt="!" />
			<div className="product-details">
				<h4 className="product-name">{name}</h4>
				<h6>Price : ${price}</h6>
				<p>Sales By : {seller}</p>
				<p>
					<small>Only {stock} remaining in stock</small>
				</p>
				<div className="icon-style">
					<Rating readonly initialRating={star} emptySymbol={emptyStart} fullSymbol={fullStar} />
				</div>
				<button onClick={() => props.handleAddToCart(props.product)} className="regular-btn">
					{cartIcon} Add to cart
				</button>
			</div>
		</div>
	);
};

export default Product;
