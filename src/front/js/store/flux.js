const getState = ({ getStore, getPrivate, getActions, setStore }) => {
	return {
		private_site: {
			users: [
				{
					"email": "prueba",
					"firstname": "Alegre",
					"id": 1,
					"password": "123456",
					"is_active": true,
					"lastname": "Juan",
					"name": "prueba"
				}
			],
			component: ["products", "logout", "favorites"]

		},
		store: {
			message: null,
			// se crean arrays de objetos
			favoritos: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			traeDatosAPI: async (url, destino) => {
				// para meter los datos de la API
				try {

					const resp = await fetch(process.env.BACKEND_URL + url)
					const data = await resp.json()
					let llenar = {}
					llenar[destino] = data
					setStore(llenar)
					return data
				} catch (error) {
					return false
				}

			},
			addFavorite: (secc, uid, atitle) => {
				const store = getStore()
				let esta = false
				if (Object.keys(store.favoritos).length === 0) { esta = false } else {
					store.favoritos.map((dato) => { if (dato.encuentra === secc + uid) { esta = true } })
				}
				if (!esta) {
					const newFav = { id: uid, clase: secc, title: atitle, encuentra: secc + uid }
					const result = store.favoritos.concat(newFav)
					setStore({ favoritos: result })
				}
			},
			delFavorite: (index) => {
				const store = getStore()
				const result = store.favoritos.filter(dato => dato.encuentra !== index);
				setStore({ favoritos: result })
			},
			esFavorite: (index) => {
				const store = getStore()
				let esta = false
				if (Object.keys(store.favoritos).length === 0) { esta = false } else {
					store.favoritos.map((dato) => { if (dato.encuentra === index) { esta = true } })
				}
				return esta
			},
		}
	};
};

export default getState;
