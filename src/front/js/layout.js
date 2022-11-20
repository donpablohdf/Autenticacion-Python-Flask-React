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
import Login from "./component/Login.jsx";
import FormLogin from "./views/FormLogin.jsx";
const Layout = () => {

	const basename = process.env.BASENAME || "BASENAME=/";

	return (
		<>
			<BrowserRouter basename={basename} >
				<React.StrictMode>
					<Navbar />
				</React.StrictMode>
				<div className="d-flex">
					<React.StrictMode>
						<LeftSideBar />
					</React.StrictMode>
					<Routes>
						<Route path="/" element={<Home />} />

						<Route exact path="/datoshome/:seccion" element={<DatosHome />} />
						<Route path="/detail/:seccion/:elID" element={<CardDetail />} />

						<Route path="/api/signup" element={<Signup />} />
						<Route path="/api/private" element={<Private />} />
						{/* <Route path="/api/login" element={<Login />} /> */}
						<Route path="/api/login" element={<FormLogin />} />
						<Route />


					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);