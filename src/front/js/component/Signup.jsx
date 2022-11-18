import React, { useEffect, useState } from "react";

export const Signup = () => {
	useEffect(() => {
		async function fetchData() {
			try {
				const resp = await fetch(process.env.BACKEND_URL + '/api/signup', {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ username: "joe", password: "1234" })
				})
				const data = await resp.json()
				console.log(data)
				const [items, setItems] = useState(data)
				return data
			}
			catch {

			}
		}
		fetchData()

	}, [])



	//if (!resp.ok) throw Error("There was a problem in the login request")

	// if (resp.status === 401) {
	// 	throw ("Invalid credentials")
	// }
	// else if (resp.status === 400) {
	// 	throw ("Invalid email or password format")
	// }

	// save your token in the localStorage
	//also you should set your user into the store using the setStore function
	//localStorage.setItem("jwt-token", data.token);



};