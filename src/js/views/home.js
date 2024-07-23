import React, { useContext } from "react";
import Card from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store } = useContext(Context);
	// console.log(store.listStarships)
	return(
	<div className="ms-5 d-flex flex-column">
	<h1 className="text-danger">Starships</h1>
	{store.listStarships.length > 0 ? (
		<ul className="d-flex list-group flex-row overflow-auto mb-5">
			{store.listStarships.map((Starship, index) => (
				<li className="list-group pe-5 pt-4" key={index}>
					{Starship.properties ? (
						<Card
							name={Starship.properties.name}
							model={Starship.properties.model}
							starship_class={Starship.properties.starship_class}
							passengers={Starship.properties.passengers}
							id={Starship.uid}
							type="starships"
						/>
					) : (
						<div>Loading...</div>
					)}
				</li>
			))}
		</ul>
	) : (
		<div>Loading...</div>
	)}

	<h1 className="text-danger">Vehicles</h1>
	{store.listVehicles.length > 0 ? (
		<ul className="d-flex list-group flex-row overflow-auto mb-5">
			{store.listVehicles.map((vehicle, index) => (
				<li className="list-group pe-5 pt-4" key={index}>
					{vehicle.properties ? (
						<Card
							name={vehicle.properties.name}
							model={vehicle.properties.model}
							cost_in_credits={vehicle.properties.cost_in_credits}
							vehicle_class={vehicle.properties.vehicle_class}
							length={vehicle.properties.length}
							passengers={vehicle.properties.passengers}
							id={vehicle.uid}
							type="vehicles"
						/>
					) : (
						<div>Loading...</div>
					)}
				</li>
			))}
		</ul>
	) : (
		<div>Loading...</div>
	)}

	<h1 className="text-danger">Species</h1>
	{store.listSpecies.length > 0 ? (
		<ul className="d-flex list-group flex-row overflow-auto mb-5">
			{store.listSpecies.map((specie, index) => (
				<li className="list-group pe-5 pt-4" key={index}>
					{specie.properties ? (
						<Card
						name = {specie.properties.name}
						classification = {specie.properties.classification}
        				language = {specie.properties.language}
						id={specie.uid}
						type="species"
						/>
					) : (
						<div>Loading...</div>
					)}
				</li>
			))}
		</ul>
	) : (
		<div>Loading...</div>
	)}
</div>
);
}
