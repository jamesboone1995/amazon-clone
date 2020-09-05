import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import './Home.css'

function Product({ id, title, image, price, rating }) {
	// eslint-disable-next-line 
	const [{ }, dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p class="product__price">
					<small>$</small>
					<strong>{price.toFixed(2)}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_) => (
							// eslint-disable-next-line
							<p>⭐️</p>
						))}
				</div>
			</div>
			<img src={image} alt="" />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
