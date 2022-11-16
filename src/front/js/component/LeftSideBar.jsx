import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const LeftSideBar = () => {
	const [itemsMenu, setItemsMenu] = useState(["Cargando"])

	const { store, actions } = useContext(Context);

	// //llamando a la funcion actions.construirObjeto(objeto)

	useEffect(() => {
		// Pido a éste una promesa
		if (!store.hasOwnProperty("sections")) { //compruebao si existe en el store
			const cumplePromesa = () => {
				return new Promise((resolve, reject) => {
					resolve(actions.traeDatosAPI('/api/sections', 'sections')) // prometo que traigo datos del obj
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
		<div className="me-2 ">
			<div className="d-inline-flex shadow m-2" >
				<ul className="dropdown-menu dropdown-menu-dark d-block position-static   shadow w-220px">
					{
						itemsMenu.map
							(
								(opcion, index) =>
									<li key={index}>
										<Link className="dropdown-item d-flex gap-2 align-items-end p-3"
											to={"/datoshome/" + opcion}>{opcion.toUpperCase()}</Link>
									</li>
							)

					}
				</ul>
			</div>
		</div>
	)

};
