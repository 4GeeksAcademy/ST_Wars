import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			  <img
                    width="130"
                    height="100"
                    src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg"
                    alt="star-wars"
                />
			<div className="ms-auto me-3">
				<button className="btn btn-success">Add new contact</button>
			</div>
		</nav>
	);
};