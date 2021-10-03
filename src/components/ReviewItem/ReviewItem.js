import React from 'react';

const ReviewItem = (props) => {
	const { name, price, quantity, key } = props.product;
	return (
		<div className="product">
			<div>
				<h3 className="product-name">{name}</h3>
				<p>price: {price}</p>
				<p>Quantity: {quantity}</p>
				<button onClick={() => props.handleRemove(key)} className="regular-btn">
					Remove
				</button>
			</div>
		</div>
	);
};

export default ReviewItem;
