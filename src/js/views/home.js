import React from "react";
import "../../styles/home.scss";
import { CharactersCards } from "../component/charactersCards";
import { PlanetsCards } from "../component/planetsCards";

const Home = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h2 className="text-center text-white">
							Characters <i className="fas fa-users"></i>
						</h2>
						<CharactersCards />
					</div>
					<div className="col-md-6">
						<h2 className="text-center text-white">
							Planets <i className="fas fa-globe-europe"></i>
						</h2>
						<PlanetsCards />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
