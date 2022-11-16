import React, { useState, useContext } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import '../../styles/navBar.css'
import logo from '/src/front/img/logoStartWars.png'
import { Login } from './Login.jsx';
import { Favorites } from './Favorites.jsx';



export const Navbar = () => {
	const { store, actions } = useContext(Context);


	const n_favs = (store.favoritos).length
	return (
		<nav className="navbar bg-secondary text-bg-secondary p-3 d-flex sticky-top">

			<div className="pl-5 "><Link to="/"><img src={logo} height={50} /></Link></div>

			<div className="pl-5 "><Link to="/private" ><button className="btn btn-secondary" type="button">Private Area</button></Link></div>

			<div className="dropdown d-flex flex-row-reverse ">
				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Login</button>
				<Login />
			</div>

			<div className="pl-5 "><Link to="/signup" >
				<button className="btn btn-secondary" type="button">Signup</button></Link>
			</div>

			<div className="dropdown d-flex flex-row-reverse anchoFijo">
				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Favoritos {n_favs}</button>
				<Favorites />
			</div>
		</nav>
	);
};
Navbar.propTypes = {
	match: PropTypes.object
};