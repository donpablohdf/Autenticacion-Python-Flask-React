import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

const Signup = () => {
	const { actions } = useContext(Context);
	const [items_sg, setitems_sg] = useState()
	useEffect(() => {
		const llamada = () => {
			const url = '/api/signup'
			const method = 'POST'
			//viene del formulario
			let body = { username: "desde_signup_jsx", password: "1234" }
			setitems_sg(() => {
				actions.solicitudesAPI(url, method, body)
			})
		}
		llamada()
	}, [])
	return (
		<div><h1>Se ha creado un usuario </h1></div>
	)

};
export default Signup;