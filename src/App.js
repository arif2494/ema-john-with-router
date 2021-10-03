import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Intentory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderREview from './components/OrderReview/OrderREview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';

function App() {
	return (
		<div>
			<Router>
				<Header />

				<Switch>
					<Route exact path="/">
						<Shop />
					</Route>
					<Route path="/shop">
						<Shop />
					</Route>
					<Route path="/review">
						<OrderREview />
					</Route>
					<Route path="/inventory">
						<Intentory />
					</Route>
					<Route path="/placeorder">
						<PlaceOrder />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
