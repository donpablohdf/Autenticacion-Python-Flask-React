import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Favorites } from "./Favorites.jsx";


export const LeftSideBar = () => {
	const [itemsMenu, setItemsMenu] = useState(["Cargando"])

	const { store, actions } = useContext(Context);

	const n_favs = (store.favoritos).length

	useEffect(() => {
		// Pido a éste una promesa
		if (!store.hasOwnProperty("sections")) { //compruebao si existe en el store
			const cumplePromesa = () => {
				return new Promise((resolve, reject) => {
					resolve(actions.dataFromAPI('/api/sections', 'sections')) // prometo que traigo datos del obj
				})
			}
			cumplePromesa().then((datos) => { // la promesa se cumple y muestro los datos
				// const convertir = Object.keys(datos)
				setItemsMenu(datos)

			}
			)
		} else {

			setItemsMenu(store.sections)
		}
	}, [])


	return (
		<>

			<div className="me-2">

				<div className="d-inline-flex shadow ms-3 mt-3">
					<ul className="dropdown-menu dropdown-menu-dark d-block position-static shadow w-220px">
						{itemsMenu.map(
							(opcion, index) =>
								<li key={index} className="d-flex justify-content-betweenp-0 m-0">

									<Link className="dropdown-item d-flex gap-2 align-items-end ps-4 py-4" to={"/datoshome/" + opcion}>
										{/* <i class='fab fa-galactic-republic ms-1 p-0'></i> */}
										{opcion.toUpperCase()}
									</Link>
								</li>
						)}

					</ul>

				</div>

			</div>

		</>
	)

};
