import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Detail } from "../component/Detail.jsx";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardDetail = props => {
	const { store, actions } = useContext(Context);
	const [dataToComp, setDataToComp] = useState({})
	const params = useParams();
	let elID = params.elID
	let seccion = params.seccion

	const getAPIparsePrint = () => {

		const url = '/api/' + seccion + '/' + elID
		actions.dataFromAPI(url, seccion).then((datos) => {

			switch (seccion) {
				case 'films':
					setDataToComp({
						title: datos[0].title,
						description: datos[0].opening_crawl
					})
					break;
				case 'people':
					setDataToComp({
						title: datos[0].name,
						description:
							<ul>
								<li>Height: {datos[0].height}</li>
								<li>Mass: {datos[0].mass}</li>
								<li>Hair color: {datos[0].hair_color}</li>
								<li>Skin color: {datos[0].skin_color}</li>
								<li>Eye color: {datos[0].eye_color}</li>
								<li>Birth year: {datos[0].birth_year}</li>
								<li>Gender: {datos[0].gender}</li>
								<li><Link to={"/detail/planets/" + datos[0].homeworld}>Home world</Link></li>
							</ul>
					})
					break;
				case 'planets':
					setDataToComp({
						title: datos[0].name,
						description:
							<ul>
								<li>Diameter: {datos[0].diameter}</li>
								<li>Rotation period: {datos[0].rotation_period}</li>
								<li>Orbital period: {datos[0].orbital_period}</li>
								<li>Gravity: {datos[0].gravity}</li>
								<li>Population: {datos[0].population}</li>
								<li>Climate: {datos[0].climate}</li>
								<li>Terrain: {datos[0].terrain}</li>
								<li>Surface water: {datos[0].surface_water}</li>
							</ul>
					})
					break;
				case 'species':
					setDataToComp({
						title: datos[0].name,
						description:
							<ul>
								<li>Classification: {datos[0].classification}</li>
								<li>Designation: {datos[0].designation}</li>
								<li>Average height: {datos[0].average_height}</li>
								<li>Average lifespan: {datos[0].average_lifespan}</li>
								<li>Hair colors: {datos[0].hair_colors}</li>
								<li>Skin colors: {datos[0].skin_colors}</li>
								<li>Eye colors: {datos[0].eye_colors}</li>
								<li>Language: {datos[0].language}</li>
								<li><Link to={"/detail/planets/" + datos[0].homeworld}>Home world</Link></li>
							</ul>
					})
					break;
				case 'starships':
					setDataToComp({
						title: datos[0].name,
						description:
							<ul>
								<li>Model: {datos[0].model}</li>
								<li>Starship class: {datos[0].starship_class}</li>
								<li>Manufacturer: {datos[0].manufacturer}</li>
								<li>Cost in credits: {datos[0].cost_in_credits}</li>
								<li>Length: {datos[0].length}</li>
								<li>Crew: {datos[0].crew}</li>
								<li>Passengers: {datos[0].passengers}</li>
								<li>Max atmosphering speed: {datos[0].max_atmosphering_speed}</li>
								<li>Hyperdrive rating: {datos[0].hyperdrive_rating}</li>
								<li>MGLT: {datos[0].MGLT}</li>
								<li>Cargo capacity: {datos[0].cargo_capacity}</li>
								<li>Consumables: {datos[0].consumables}</li>
							</ul>
					})
					break;
				case 'vehicles':
					setDataToComp({
						title: datos[0].name,
						description:
							<ul>
								<li>Model: {datos[0].model}</li>
								<li>Vehicle class: {datos[0].vehicle_class}</li>
								<li>Manufacturer: {datos[0].manufacturer}</li>
								<li>Cost in credits: {datos[0].cost_in_credits}</li>
								<li>Length: {datos[0].length}</li>
								<li>Crew: {datos[0].crew}</li>
								<li>Passengers: {datos[0].passengers}</li>
								<li>Max atmosphering speed: {datos[0].max_atmosphering_speed}</li>
								<li>Cargo capacity: {datos[0].cargo_capacity}</li>
								<li>Consumables: {datos[0].consumables}</li>
							</ul>
					})
					break;

			}
		})
	}

	useEffect(() => { getAPIparsePrint() }, [seccion, elID, dataToComp])

	return (
		<>
			<div className="jumbotron p-3">
				<img src="https://via.placeholder.com/450" className="d-inline-flex" alt="fake" />
				<h1 className="display-6">{dataToComp.title}</h1>
				<div>{dataToComp.description}</div>
			</div>
			{/* <Detail title={dataToComp.title} description={dataToComp.description} /> */}
		</>
	);
};
CardDetail.propTypes = { match: PropTypes.object };
