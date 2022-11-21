import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {
	const { actions } = useContext(Context);
	const token = localStorage.getItem('jwt-token')
	//console.log("Private_jsx:", token)
	if (!token) {
		return (
			<div className="m-3"><h1 className="bg-danger">No está autorizado</h1></div>
		)
	} else {

		return (
			<>
				<div className="m-3"><h1>Autorizado</h1></div>
			</>
		)
	}
}
