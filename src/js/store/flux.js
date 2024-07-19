const getState = ({ getStore, getActions, setStore }) => {
		const apiFetch = async (element,id) => {
		try{
			let resp = await fetch(`https://www.swapi.tech/api/${element}`)
			if (!resp.ok){
				console.error(`error en la peticion${resp.status}`)
			}
			let data = await resp.json()
			let obj ={}
			obj[element] = {
			uid: data.result.uid,	
			description: data.result.description,
			...data.result.properties
		}
		setStore({...obj})
		} catch (error){
			console.error(`Error en la promesa: ${error}`)
		}
	}
	return {
		store: {
			listStarships: [],
            listVehicles: [],
            listFilms: [],
            // infoCharacter: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getStarships: () => apiFetch("starships", "listStarships"),
            getVehicles: () => apiFetch("vehicles", "listVehicles"),
            getFilms: () => apiFetch("films",)
		}
	};
};

export default getState;
