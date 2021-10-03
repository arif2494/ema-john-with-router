import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderREview = () => {
	const [ products ] = useProducts();
	const [ cart, setCart ] = useCart(products);
	let history = useHistory();
	const handleRemove = (key) => {
		const newCart = cart.filter((product) => product.key !== key);
		setCart(newCart);
		deleteFromDb(key);
	};

	const handlePlaceOrder = () => {
		history.push('placeorder');
		setCart([]);
		clearTheCart();
	};
	return (
		<div className="shop-container">
			<div className="product-container">
				{cart.map((product) => <ReviewItem product={product} key={product.key} handleRemove={handleRemove} />)}
			</div>
			<div className="cart-container">
				<Cart cart={cart}>
					<button onClick={handlePlaceOrder} className="regular-btn">
						Place Order
					</button>
				</Cart>
			</div>
		</div>
	);
};

export default OrderREview;
