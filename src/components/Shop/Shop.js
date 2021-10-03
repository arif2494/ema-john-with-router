import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
	const [ products, setProducts ] = useState([]);
	const [ cart, setCart ] = useState([]);
	const [ displayProducts, setDisplayProducts ] = useState([]);
	// Fetch data
	useEffect(() => {
		fetch('./products.JSON').then((res) => res.json()).then((data) => {
			setProducts(data);
			setDisplayProducts(data);
		});
	}, []);
	// Find product with key saved in local storage
	useEffect(
		() => {
			if (products.length) {
				const savedCart = getStoredCart();
				const storedCart = [];
				for (const key in savedCart) {
					const addedProduct = products.find((product) => product.key === key);
					if (addedProduct) {
						const quantity = savedCart[key];
						addedProduct.quantity = quantity;
						storedCart.push(addedProduct);
					}
				}
				setCart(storedCart);
			}
		},
		[ products ]
	);
	const handleAddToCart = (product) => {
		const exists = cart.find((pd) => pd.key === product.key);
		let newCart = [];
		if (exists) {
			const rest = cart.filter((pd) => pd.key !== product.key);
			exists.quantity += 1;
			newCart = [ ...rest, product ];
		} else {
			product.quantity = 1;
			newCart = [ ...cart, product ];
		}
		console.log(newCart);
		setCart(newCart);
		// Save to localstorage
		addToDb(product.key);
	};

	// search event handler
	const handleSearch = (event) => {
		const searchText = event.target.value;
		const matchedProduct = products.filter((product) =>
			product.name.toLowerCase().includes(searchText.toLowerCase())
		);
		setDisplayProducts(matchedProduct);
	};

	return (
		<div>
			<div className="search-container">
				<input onChange={handleSearch} type="text" placeholder="Type here fo search" />
			</div>
			<div>
				<div className="shop-container">
					<div className="product-container">
						<h3>All Products : {products.length}</h3>
						{displayProducts.map((product) => (
							<Product product={product} key={product.key} handleAddToCart={handleAddToCart} />
						))}
					</div>
					<div className="cart-container">
						<Cart cart={cart}>
							<Link to="/review">
								<button className="regular-btn">REview Order</button>
							</Link>
						</Cart>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
