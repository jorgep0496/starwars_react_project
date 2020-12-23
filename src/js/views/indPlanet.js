import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/indPlanet.scss";

export const IndPlanet = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	useEffect(() => {
		actions.getIndPlanet("planets", id);
	}, [id]);
	return (
		<div className="container" id="cont">
			<div className="row">
				<div className="col-md-12 text-center text-white">
					<h1 id="planetTitle">{!!store.onPlanet && store.onPlanet.result.properties.name}</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<img
						src={`../img/planets/${!!store.onPlanet &&
							store.onPlanet.result.properties.name.split(" ").join("_")}.jpg`}
						id="planetImage"
						alt="Image"
						className="d-inline-block"
					/>
					<ul className="text-white d-inline-block align-middle" id="planetInfo">
						<li>
							<span className="text-warning">Climate: </span>
							{!!store.onPlanet && store.onPlanet.result.properties.climate}
						</li>
						<li>
							<span className="text-warning">Diameter: </span>
							{!!store.onPlanet && store.onPlanet.result.properties.diameter}
						</li>
						<li>
							<span className="text-warning">Gravity: </span>
							{!!store.onPlanet && store.onPlanet.result.properties.gravity}
						</li>
						<li>
							<span className="text-warning">Rotation Period: </span>
							{!!store.onPlanet && store.onPlanet.result.properties.rotation_period}
						</li>
						<li>
							<span className="text-warning">Orbital Period: </span>
							{!!store.onPlanet && store.onPlanet.result.properties.orbital_period}
						</li>
						<li>
							<span className="text-warning">Population: </span>
							{!!store.onPlanet && store.onPlanet.result.properties.population}
						</li>
						<li>
							<span className="text-warning">Terrain: </span>
							{!!store.onPlanet && store.onPlanet.result.properties.terrain}
						</li>
						<Link className="btn text-warning border border-warning" to="/" id="backBtn">
							Go Back!
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
};
