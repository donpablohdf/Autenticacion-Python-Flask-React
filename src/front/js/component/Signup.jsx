import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const Signup = () => {
	const { store, actions } = useContext(Context);


	const hayFav = Object.keys(store.favoritos).length
	return (
		<>
        <h1>Signup</h1>
        </>
	);
};