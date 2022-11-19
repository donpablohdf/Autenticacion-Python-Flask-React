import React, { useState, useContext } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import '../../styles/navBar.css'
import logo from '/src/front/img/logoStartWars.png'
import { Favorites } from './Favorites.jsx';



export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const n_favs = (store.favoritos).length
	return (
		<>
			<nav className="navbar bg-secondary text-bg-secondary py-3 d-flex justify-content-between sticky-top">

				<div id="goHome" className="d-flex flex-row justify-content-start ms-3 px-3 py-3 bg-dark rounded">
					<Link to="/">
						<img src={logo} height={50} />
					</Link>
				</div>



				<div id="API_g" className="d-flex flex-row justify-content-end me-3">
					<div id="favoritos"  >
						<div className="dropdown d-flex flex-row-reverse">
							<button className="btn btn-secondary dropdown-toggle" type="button" id="bt_favoritos" data-bs-toggle="dropdown" aria-expanded="false">Favoritos {n_favs}</button>
							<Favorites />
						</div>
					</div>
					<div id="private" className="pl-5 ">
						<Link to="api/private" >
							<button className="btn btn-secondary" type="button">Private Area</button>
						</Link>
					</div>

					<div id="login" className="pl-5">
						<Link to="api/login" >
							<button className="btn btn-secondary" type="button" >Login</button>
						</Link>
					</div>

					<div id="signup" className="pl-5 ">
						<Link to="api/signup" >
							<button className="btn btn-secondary" type="button">Signup</button>
						</Link>
					</div>
				</div>

			</nav>


		</>
	);
};
Navbar.propTypes = {
	match: PropTypes.object
};