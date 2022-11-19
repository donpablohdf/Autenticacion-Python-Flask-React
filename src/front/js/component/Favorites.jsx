import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import '../../styles/navBar.css'

export const Favorites = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div >
				<ul className="dropdown-menu" aria-labelledby="bt_favoritos">
					{((store.favoritos).length !== 0) ? store.favoritos.map((dato, index) =>
						<>
							{/* <div>{dato.clase}</div> */}
							<li className="d-flex flex-row align-items-center">
								<Link key={dato.toString()} className="dropdown-item p-1 ms-3 btn btn-secondary" to={"/detail/" + dato.clase + "/" + dato.id}>
									{dato.title}
								</Link>

								<button onClick={() => actions.delFavorite(dato.clase + dato.id)} type="button" className=" btn btn-close px-3 py-2  btn-danger me-2" aria-label="Delete">

								</button>
							</li>
						</>

					) : <li className="dropdown-item ">Nada en favoritos</li>}
				</ul>
			</div>
		</>
	);
};
Favorites.propTypes = {
	match: PropTypes.object
};
