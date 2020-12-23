import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/indCharacter.scss";

export const IndCharacter = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	useEffect(() => {
		actions.getIndCharacter("people", id);
	}, [id]);

	return (
		<div className="container" id="cont">
			<div className="row">
				<div className="col-md-12 text-center text-white">
					<h1 id="planetTitle">{!!store.onCharacter && store.onCharacter.result.properties.name}</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 ml-5">
					<img
						src={`../img/characters/${!!store.onCharacter &&
							store.onCharacter.result.properties.name.split(" ").join("_")}.jpg`}
						id="planetImage"
						alt="Image"
						className="d-inline-block"
					/>
					<ul className="text-white d-inline-block align-middle" id="planetInfo">
						<li>
							<span className="text-warning">Birth year: </span>
							{!!store.onCharacter && store.onCharacter.result.properties.birth_year}
						</li>
						<li>
							<span className="text-warning">Gender: </span>
							{!!store.onCharacter && store.onCharacter.result.properties.gender}
						</li>
						<li>
							<span className="text-warning">Eye color: </span>
							{!!store.onCharacter && store.onCharacter.result.properties.eye_color}
						</li>
						<li>
							<span className="text-warning">Skin color: </span>
							{!!store.onCharacter && store.onCharacter.result.properties.skin_color}
						</li>
						<li>
							<span className="text-warning">Hair color: </span>
							{!!store.onCharacter && store.onCharacter.result.properties.hair_color}
						</li>
						<li>
							<span className="text-warning">Height: </span>
							{!!store.onCharacter && store.onCharacter.result.properties.height}
						</li>
						<li>
							<span className="text-warning">Mass: </span>
							{!!store.onCharacter && store.onCharacter.result.properties.mass}
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
