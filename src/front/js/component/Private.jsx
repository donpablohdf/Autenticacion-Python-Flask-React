import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {
	const { actions } = useContext(Context);
	const [items_pr, setitems_pr] = useState(false)
	const token = localStorage.getItem('jwt-token')
	//console.log("Private_jsx:", token)
	if (!token) {
		return (
			<div className="m-3"><h1 className="bg-danger">No está autorizado</h1></div>
		)
	}
	useEffect(() => {
		const url = '/api/private'
		const method = 'POST'
		const head = {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token
		}
		setitems_pr(() => { actions.solicitudesAPI(url, method, head, '') })
		//return items_pr


	}, [token, items_pr])

	return (
		<>
			<h1>Autorizado. Private</h1>
		</>
	);
};
Private.propTypes = {
	match: PropTypes.object
};