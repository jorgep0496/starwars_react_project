import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/planetCards.scss";

export const PlanetsCards = () => {
	const { store, actions } = useContext(Context);
	let bio =
		"Nam sodales, justo in pharetra tincidunt, tellus mi finibus ligula, sit amet interdum tortor lacus vel leo. Aenean sed tristique orci. Nulla laoreet dui in fringilla cursus.";
	return (
		<>
			<div id="planetsCards" className="carousel slide border border-warning rounded-lg" data-ride="carousel">
				<div className="carousel-inner text-warning">
					{!!store.planets &&
						store.planets.results.map((planet, i) => (
							<div
								key={i}
								className={i === 0 ? "carousel-item text-center active" : "carousel-item text-center"}>
								<div className="card d-block w-100">
									<img
										src={`./img/planets/${planet.name.split(" ").join("_")}.jpg`}
										className="card-img-top"
										id="planetImage"
										alt="Image"
									/>
									<div className="card-body">
										<h5 className="card-title">{planet.name}</h5>
										<p className="card-text text-white">{bio}</p>
										<Link
											className="btn text-warning border border-warning"
											onClick={() => actions.onPlanetId(planet.uid)}
											to={`/planets/${planet.uid}`}>
											Learn More!
										</Link>
										<i
											className="fas fa-heart align-middle"
											id="heartFav"
											onClick={() => actions.setPlanetToFav(i)}
											style={actions.planetFindInFav(i) ? { color: "red" } : { color: "white" }}
										/>
									</div>
								</div>
							</div>
						))}
				</div>
				<a className="carousel-control-prev" href="#planetsCards" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#planetsCards" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</>
	);
};
