import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DropdownMenu = (lengh_data, obj, action) => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="overflow-visible">
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{(hayFav !== 0) ? store[obj].map((dato, index) =>
						<li key={index} className="d-flex flex-row align-items-center">
							<button onClick={() => actions.action(dato.clase + dato.id)} type="button" className="btn-close btn-close-width p-3" aria-label="Delete"></button>
							<Link className="dropdown-item" to={"/detail/" + dato.clase + "/" + dato.id}>{dato.title}</Link>
						</li>

					) : <li className="dropdown-item">Empty</li>}
				</ul>
			</div>
		</>
	);
};