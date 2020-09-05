import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout";
import Login from './Login'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
	const [{ user }, dispatch] = useStateValue();

	// useEffect <<<<<<<< POWERFUL 
	// piece of coe which runs based on a given condition

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// user is logged in
				dispatch({
					type: "SET_USER",
					user: authUser
				})
			} else {
				// user is logged out
				dispatch({
					type: 'SET_USER',
					user: null
				})
			}
		})
		return () => {
			unsubscribe();
		}
	}, [])

	console.log(user);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
