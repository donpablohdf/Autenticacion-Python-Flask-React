import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // version 6.4.2

import { Home } from './views/Home.jsx';
import { CardDetail } from './views/CardDetail.jsx';
import injectContext from './store/appContext.js';
import { DatosHome } from './views/DatosHome.jsx';

import { Navbar } from './component/Navbar.jsx';
import { LeftSideBar } from './component/LeftSideBar.jsx';
import Signup from './component/Signup.jsx'
import { Private } from './component/Private.jsx'

const Layout = () => {
	// puede establecer el nombre base en el archivo .env ubicado en la raíz de este proyecto, por ejemplo: BASENAME=/subdirectorio-publicacion/

	const basename = process.env.BASENAME || "BASENAME=/";
	const base_url = process.env.BACKEND_URL || "BACKEND_URL=http://localhost:3001";

	return (
		<>
			<BrowserRouter basename={basename} >
				<Navbar />
				<div className="d-flex">
					<LeftSideBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route exact path="/datoshome/:seccion" element={<DatosHome />} />
						<Route path="/detail/:seccion/:elID" element={<CardDetail />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/private" element={<Private />} />
						<Route />


					</Routes>
				</div>

			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);