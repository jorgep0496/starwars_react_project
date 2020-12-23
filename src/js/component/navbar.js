import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Favorites } from "./favorites";
import "../../styles/navbar.scss";

const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light">
				<Link className="navbar-brand" to="/">
					<i className="fas fa-jedi text-warning fa-2x"></i>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse dropleft" id="navbarNavDropdown">
					<ul className="navbar-nav ml-auto">
						<Favorites />
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
/*
<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<i className="fas fa-jedi text-light fa-2x"></i>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-light">Check the Context in action</button>
				</Link>
			</div>
		</nav>



{store.nav.map((link, i) => {
	return (
		<li className="nav-item active" key={i}>
			<Link className="nav-link text-white" to={link.to}>
				{`/   ${link.label}`}
			</Link>
		</li>
	);
})}

*/
