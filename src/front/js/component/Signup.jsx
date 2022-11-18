import React, { useEffect, useState, useContext, memo } from "react";
import { Context } from "../store/appContext";

const Signup = () => {
	const { store, actions } = useContext(Context);
	const [items, setItems] = useState(false)
	useEffect(() => {

		if (!items) {
			const url = '/api/signup'
			const method = 'POST'
			//viene del formulario
			let body = { username: "joe", password: "1234" }

			const makeSignup = () => { return new Promise((resolve, reject) => { resolve(actions.solicitudesAPI(url, method, body)) }) }
			makeSignup().then((datos) => { setItems(datos) })

			// try {
			// const url = '/api/signup'
			// const method = 'POST'
			// //viene del formulario
			// let body = { username: "joe", password: "1234" }

			// const makeSignup = () => { return new Promise((resolve, reject) => { resolve(actions.solicitudesAPI(url, method, body)) }) }
			// makeSignup().then((datos) => { setItems(datos) })
			// catch {

			// }
		}

	}, [])
	//if (!resp.ok) throw Error("There was a problem in the login request")

	// if (resp.status === 401) {
	// 	throw ("Invalid credentials")
	// }
	// else if (resp.status === 400) {
	// 	throw ("Invalid email or password format")
	// }

	// save your token in the localStorage
	//also you should set your user into the store using the setStore function
	//localStorage.setItem("jwt-token", data.token);

	return true

};
export default memo(Signup);