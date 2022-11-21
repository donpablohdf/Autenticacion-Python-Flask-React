import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
//import "./App.css"

function Logout() {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        //meter favoritos en bbdd
        //console.log(store.favoritos)
        const token = localStorage.removeItem('jwt-token')
        const logout = actions.logOut()
    }, [])

    return (
        <div className="m-3"><h1>Has cerrado sesión</h1></div>
    )
}

export default Logout;