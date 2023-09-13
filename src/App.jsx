import styled from 'styled-components';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Store from './components/Store';
import Error404 from './components/Error404';
import Cart from './components/Cart';
import {useState} from "react";

const App = () => {
	const products = [
        {id: 1, name: 'Product 1', price: 100},
        {id: 2, name: 'Product 2', price: 110},
        {id: 3, name: 'Product 3', price: 120},
        {id: 4, name: 'Product 4', price: 130}
    ];

    const [cart, setCart] = useState([]);

	const addToCart = (productId, name, price) => {
		if(cart.length === 0){
			setCart([{id: productId, name: name, qty: 1, price: price }]);
		} else {
			const newCart = [...cart];
			const foundItem = newCart.findIndex((item) => item.id === productId);
			if(foundItem === -1){
				newCart.push({id: productId, name: name, qty: 1, price: price });
			} else {
				newCart[foundItem].qty++;
			}
			setCart(newCart);
		}
	};

	return (
		<Container>
			<Menu>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/blog">Blog</NavLink>
				<NavLink to="/store">Store</NavLink>
			</Menu>
			<main>
				<Routes>
					<Route path="*" element={<Error404 />} />
					<Route path="/" element={<Home />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/store" element={
						<Store 
							products={products}
							addToCart={addToCart}
						/>}	
					/>
				</Routes>
			</main>
			<aside>
				<Cart cart={cart} />
			</aside>
		</Container>
	);
}

const Container = styled.div`
	max-width: 1000px;
	padding: 40px;
	width: 90%;
	display: grid;
	gap: 20px;
	grid-template-columns: 2fr 1fr;
	background: #fff;
	margin: 40px 0;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
	width: 100%;
	text-align: center;
	background: #092c4c;
	grid-column: span 2;
	border-radius: 3px;

	a {
		color: #fff;
		display: inline-block;
		padding: 15px 20px;
	}

	a:hover {
		background: #1d85e8;
		text-decoration: none;
	}
`;

export default App;
