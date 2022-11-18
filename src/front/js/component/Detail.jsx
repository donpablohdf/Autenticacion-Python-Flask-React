import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detail = props => {
	return (
		<>
			<div className="jumbotron p-3">
				<img src="https://via.placeholder.com/450" className="d-inline-flex" alt="fake" />
				<h1 className="display-6">{props.title}</h1>
				<div>{props.description}</div>
			</div>
		</>
	)

}
Detail.propTypes = { match: PropTypes.object }
