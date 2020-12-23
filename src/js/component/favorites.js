import React, { StrictMode, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/favorites.scss";

export const Favorites = () => {
	const { store, actions } = useContext(Context);
	return (
		<li className="nav-item dropdown bg-warning rounded">
			<a
				className="nav-link dropdown-toggle"
				href="#"
				id="navbarDropdownMenuLink"
				role="button"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Favorites
				<span className="fav-num"> {` (${store.favorites.length}) `}</span>
			</a>
			<div className="dropdown-menu bg-warning" aria-labelledby="navbarDropdownMenuLink">
				<p className="dropdown-item" style={store.favorites.length > 0 ? { display: "none" } : null}>
					No items yet
				</p>
				{!!store.favorites &&
					store.favorites.map((item, i) => {
						let onID = parseInt(actions.findCharIndexOfFav(i)) + 1;
						return (
							<div className="d-flex justify-content-between" key={i}>
								<Link className="dropdown-item mr-1" to={`${item.to}${onID}`}>
									{item.label}
								</Link>
								<i
									className="fas fa-trash mt-2 mr-3"
									id="favTrash"
									onClick={() => actions.deleteItemFromFav(item.label)}
								/>
							</div>
						);
					})}
			</div>
		</li>
	);
};
