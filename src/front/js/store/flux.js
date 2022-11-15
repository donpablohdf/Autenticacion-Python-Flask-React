const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			favoritos: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			traeDatosAPI_2: async (url, destino) => {
				// para meter los datos de la API
				try {
					const resp = await fetch(process.env.BACKEND_URL + destino)
					const data = await resp.json()
					let llenar = {}
					llenar[destino] = data
					await setStore(llenar)
					return data
				} catch (error) {
					console.log("Error loading message from backend", error)
				}

			},
			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			construirObjeto: (url, objeto) => {
				const datosStore = getStore();
				if (!datosStore.hasOwnProperty(objeto)) {
					console.log("NO existe el objeto " + objeto + " en el store")
					const cumplePromesa = () => {
						return new Promise((resolve, reject) => {
							resolve(() => {
								//datosStore[objeto] = new Object() // creo el array en store
								return getActions().traeDatosAPI(url, objeto) // prometo que traigo datos del obj
							})
						})
					}
					cumplePromesa().then((datos) => {
						return datos// tengo que meter los datos recibidos en un useState del componete que los recibe para poder renderizarlo en el return

					}
					)

				} else {
					return datosStore[objeto]
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
