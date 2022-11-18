import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

const Signup = () => {
	const { store, actions } = useContext(Context);
	const [items, setItems] = useState(false)
	const [reloadData, setReloadData] = useState(false);
	useEffect(() => {
		const llamada = () => {

			const url = '/api/signup'
			const method = 'POST'
			//viene del formulario
			let body = { username: "joe", password: "1234" }
			setItems(() => {
				actions.solicitudesAPI(url, method, body)
				//setReloadData(true)
			})
		}
		const llamada2 = () => {
			const url = '/api/signup'
			const method = 'POST'
			//viene del formulario
			let body = { username: "joe", password: "1234" }
			const makeSignup = () => {
				return new Promise((resolve, reject) => {
					resolve(
						actions.solicitudesAPI(url, method, body))
				})
			}
			makeSignup().then((datos) => {
				setItems(datos)
				//setReloadData(true)
			})

		}
		const llamada3 = () => {
			try {
				const url = '/api/signup'
				const method = 'POST'
				//viene del formulario
				let body = { username: "joe", password: "1234" }

				const makeSignup = () => {
					return new Promise(
						(resolve, reject) => {
							resolve(() => {
								actions.solicitudesAPI(url, method, body)
							}
							)
						}
					)
				}
				makeSignup().then((datos) => { setItems(datos) })
			}
			catch {
				console.log("Error llamada API")
			}

		}
		llamada()

		//return () => setReloadData(false)

	}, [])
	return items

};
export default Signup;