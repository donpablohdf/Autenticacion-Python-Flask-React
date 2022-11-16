import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const Private = () => {
	const { store, actions } = useContext(Context);


	const hayFav = Object.keys(store.favoritos).length
	return (
		<>
        <h1>Private</h1>
        </>
	);
};
Private.propTypes = {
	match: PropTypes.object
};