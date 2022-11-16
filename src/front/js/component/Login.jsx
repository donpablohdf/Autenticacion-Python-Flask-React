import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="overflow-visible">

				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

					<li className="d-flex flex-row align-items-center">
						<button type="button" className="btn-close btn-close-width p-3" aria-label="Delete"></button>

					</li>


				</ul>
			</div>
		</>
	);
};