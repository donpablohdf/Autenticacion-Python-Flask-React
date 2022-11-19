import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";

const Login = () => {
	const { actions } = useContext(Context);
	const token = localStorage.getItem('jwt-token')
	const [items_py, setitems_py] = useState()
	if (token) {
		return (
			<div className="m-3"><h1 className="bg-danger">Ya hizo login antes</h1></div>
		)
	} else {
		useEffect(() => {
			const llamada = () => {
				const url = '/api/login'
				const method = 'POST'
				const head = { "Content-Type": "application/json" }
				//vendrá del formulario
				let body = { username: "manolito", password: "ito" }
				setitems_py(() => { actions.solicitudesAPI(url, method, head, body) })
			}
			llamada()

		}, [items_py])
	}
	return (
		<div className="m-3"><h1 className="bg-info">Hizo login</h1></div>
	)

};
export default Login;