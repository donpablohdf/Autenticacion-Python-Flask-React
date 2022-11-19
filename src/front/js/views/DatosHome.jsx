import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/datosHome.css";

export const DatosHome = props => {
	const params = useParams();
	const seccion = params.seccion

	const { store, actions } = useContext(Context);

	const [objDatos, setObjDatos] = useState(["Cargando.."]) //
	let newData = {}
	let transDatos = []

	const parseData = (obj, secc) => {
		if (secc === "films") {
			obj.map((dato) => {
				{
					newData = {
						uid: dato.id,
						title: dato.title,
						desc: dato.opening_crawl.slice(0, 90) + "...."
					}
					transDatos.push(newData)

				}
			})
			setObjDatos(transDatos)
		}
		if (secc != "films") {
			obj.map((dato) => {
				{

					newData = { uid: dato.id, title: dato.name, desc: dato.description }
					transDatos.push(newData)

				}
			}
			)
			setObjDatos(transDatos)

		}

	}

	useEffect(() => {

		if (!store.hasOwnProperty(seccion)) { //csi NO existe en la store, recojo los datos de la BBDD

			const cumplePromesa = () => {
				return new Promise((resolve, reject) => {
					resolve(actions.dataFromAPI('/api/' + seccion, seccion)) // prometo que traigo datos del obj
				})
			}

			cumplePromesa().then((datos) => { // la promesa se cumple y muestro los datos
				parseData(datos, seccion)
			}
			)
		} else { //si ya existe usamos lo que hay en el store
			parseData(store[seccion], seccion)

		}
	}, [seccion, store.favoritos])




	return (
		<>
			<div className="container-fluid ">
				<div className="row d-flex">
					{objDatos.map((dato, index) =>
						<div className="card mt-2 me-3  p-0 d-inline-flex anchoFijo" key={index} >
							<img src="https://via.placeholder.com/250" className="d-inline-flex" alt="fake" />
							<div className="card-body d-flex flex-column align-content-stretch flex-wrap ">
								<h6 className="card-title">{dato.title}</h6>
								<p className="card-text altoFijo">{dato.desc}</p>
								<div className="d-flex d-flex justify-content-between">
									{(!actions.esFavorite(seccion + dato.uid)) ?
										<button className="btn btn-primary" onClick={() => actions.addFavorite(seccion, dato.uid, dato.title)}><i className="far fa-heart"></i></button>
										: ""}
									<Link
										to={"/detail/" + seccion + "/" + dato.uid}>
										<button className="btn btn-primary">Ver ficha</button></Link>
								</div>

							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

DatosHome.propTypes = {
	match: PropTypes.object
};
