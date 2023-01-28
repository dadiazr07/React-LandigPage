import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Nav } from "./Nav.jsx";
import { Cards } from "./Cards.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
			<>
			<Nav/>
			<div className="container">
				<div className="row">
					<div className="col">
						<Jumbotron/>
						<Cards/>
					</div>
				</div>
			</div>
			<Footer/>
			</>

	);
};

export default Home;
