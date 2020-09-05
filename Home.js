import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt=""
			/>
			<div className="home__row">
				<Product
					id="12312313"
					title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price={11.95}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
				/>
				<Product
					id="12312314"
					title="iPod Classic Video 30GB Black 5th Generation - Discontinued by Manufacturer Comes with Generic Ear pods Wall Pug and Charging Wire Packaged in White Box"
					price={159.98}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/21e-Hu9yH0L._AC_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="12312315"
					title="Epiphone Limited Edition ES-335 PRO Electric Guitar Cherry
                    "
					price={699.46}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/61-yOtqNa-L._AC_SX679_.jpg"
				/>
				<Product
					id="12312316"
					title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray
 
					"
					price={2099.0}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SX679_.jpg"
				/>
				<Product
					id="12312317"
					title='Amazon Brand – Stone & Beam Westview Extra-Deep Down-Filled Leather Sofa Couch, 89"W, Dark Grey'
					// prettier-ignore
					price={1593.90}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/71%2BYMq06qWL._AC_SL1500_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="12312318"
					title="Funko Pop!TV: The Office - Dwight with Gelatin Stapler
                    "
					price={7.84}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/518oRvfXItL._AC_SL1300_.jpg"
				/>
			</div>
			{/* Product id, title, price, rating, image */}
		</div>
	);
}

export default Home;
