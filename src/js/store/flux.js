const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites: [],
			//character: null,
			//planets: null,
			onCharacter: null,
			onCharacterId: null,
			onPlanet: null,
			onPlanetId: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			deleteItemFromFav: item => {
				const store = getStore();
				const fav = store.favorites;
				for (let j in fav) {
					if (fav[j].label === item) {
						fav.splice(j, 1);
						setStore({
							favorites: fav
						});
					}
				}
			},

			characterFindInFav: i => {
				const store = getStore();
				const fav = store.favorites;
				return fav.find(o => o.label === store.character.results[i].name) ? true : false;
			},

			planetFindInFav: i => {
				const store = getStore();
				const fav = store.favorites;
				return fav.find(o => o.label === store.planets.results[i].name);
			},

			findCharIndexOfFav: i => {
				const store = getStore();
				const fav = store.favorites;
				const characters = store.character.results;
				const planets = store.planets.results;
				for (let j in characters) {
					if (characters[j].name === fav[i].label) {
						return j;
					}
					for (let k in planets) {
						if (planets[k].name === fav[i].label) {
							return k;
						}
					}
				}
			},

			setCharToFav: i => {
				const store = getStore();
				const fav = store.favorites;
				const characters = !!store.character && store.character.results;
				if (getActions().characterFindInFav(i)) {
					for (let j in fav) {
						if (fav[j].label === characters[i].name) {
							fav.splice(j, 1);
							setStore({
								favorites: fav
							});
						}
					}
				} else {
					setStore({
						favorites: [
							...store.favorites,
							{
								label: store.character.results[i].name,
								to: "/characters/"
							}
						]
					});
				}
			},

			setPlanetToFav: i => {
				const store = getStore();
				const fav = store.favorites;
				const planets = store.planets.results;
				if (getActions().planetFindInFav(i)) {
					for (let j in fav) {
						if (fav[j].label === planets[i].name) {
							fav.splice(j, 1);
							setStore({
								favorites: fav
							});
						}
					}
				} else {
					setStore({
						favorites: [
							...store.favorites,
							{
								label: store.planets.results[i].name,
								to: "/planets/"
							}
						]
					});
				}
			},

			onCharacterId: id => {
				setStore({
					onCharacterId: id
				});
			},

			onPlanetId: id => {
				setStore({
					onPlanetId: id
				});
			},

			getIndCharacter: (type, id) => {
				fetch(`https://www.swapi.tech/api/${type}/${id}/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ onCharacter: data });
						//setStore({ onImage: data.name.split(" ").join("_") });
					})
					.catch(err => {
						err.message;
					});
			},

			getIndPlanet: (type, id) => {
				fetch(`https://www.swapi.tech/api/${type}/${id}/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ onPlanet: data });
						//setStore({ onImage: data.name.split(" ").join("_") });
					})
					.catch(err => {
						err.message;
					});
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ character: data });
					})
					.catch(err => {
						err.message;
					});
			},

			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ planets: data });
					})
					.catch(err => {
						err.message;
					});
			}
		}
	};
};

export default getState;
