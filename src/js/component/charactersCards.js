import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/CharactersCards.scss";

export const CharactersCards = () => {
	const { store, actions } = useContext(Context);
	let bio =
		"Etiam aliquam enim accumsan nibh dapibus pulvinar. Praesent placerat convallis elementum. Proin commodo eget ligula sodales euismod.";
	return (
		<>
			<div id="charactersCards" className="carousel slide border border-warning rounded-lg" data-ride="carousel">
				<div className="carousel-inner text-warning">
					{!!store.character &&
						store.character.results.map((char, i) => (
							<div
								key={i}
								className={i === 0 ? "carousel-item text-center active" : "carousel-item text-center"}>
								<div className="card d-block w-100">
									<img
										src={`./img/characters/${char.name.split(" ").join("_")}.jpg`}
										className="card-img-top"
										id="characterImage"
										alt="Image"
									/>
									<div className="card-body">
										<h5 className="card-title">{char.name}</h5>
										<p className="card-text text-white">{bio}</p>
										<Link
											className="btn text-warning border border-warning"
											onClick={() => actions.onCharacterId(char.uid)}
											to={`/characters/${char.uid}`}>
											Learn More!
										</Link>
										<i
											className="fas fa-heart align-middle"
											id="heartFav"
											onClick={() => actions.setCharToFav(i)}
											style={
												actions.characterFindInFav(i) ? { color: "red" } : { color: "white" }
											}
										/>
									</div>
								</div>
							</div>
						))}
				</div>
				<a className="carousel-control-prev" href="#charactersCards" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#charactersCards" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</>
	);
};
