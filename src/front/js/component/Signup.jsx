import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
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
Signup.propTypes = {
	match: PropTypes.object
};