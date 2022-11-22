import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
//import "./App.css"

function Logout() {
    const { store, actions } = useContext(Context);
    const token = localStorage.getItem('jwt-token')
    useEffect(() => {
        //meter favoritos en bbdd
        if (token) {
            const url = '/api/logout'
            const method = 'POST'
            const head = {
                "Content-Type": "application/json"
            }

            const body = { "public_id": store.user_public_id, "favs": store.favoritos }
            let log = actions.solicitudesAPI(url, method, head, body)

            //console.log(store.favoritos)
            //const token = localStorage.removeItem('jwt-token')
            const logout = actions.logOut()
        }
    }, [])

    return (
        <div className="m-3"><h1>Has cerrado sesión</h1></div>
    )
}

export default Logout;