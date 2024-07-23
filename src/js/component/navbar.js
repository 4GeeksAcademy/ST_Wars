import React, { useContext }  from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/" className="navbar-brand ms-5">
				<img
                    width="130"
                    height="100"
                    src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg"
                    alt="star-wars"
                />
            </Link>
			  
			<div className="dropdown me-3">
 				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favourites
  				</button>
  				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    				{store.favorites.map((favorite, index) => (
                        <li key={index}>
                            <span className="dropdown-item">{favorite.name}</span>
                            <button onClick={() => actions.removeFavorite(favorite)}> <FontAwesomeIcon icon={faTrashCan} /></button>
                        </li>
                    ))}
  				</ul>
			</div>
		</nav>
	);
};