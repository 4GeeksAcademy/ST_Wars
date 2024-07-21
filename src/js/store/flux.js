const getState = ({ getStore, getActions, setStore }) => {

	const apiFetch = async (endpoint, storeKey) => {
        try {
            const response = await fetch(`https://www.swapi.tech/api/${endpoint}/`);
            const data = await response.json();

            const updatedResults = await Promise.all(
                data.results.map(async (item) => {
                    const id = item.uid;
                    const responseDetails = await fetch(
                        `https://www.swapi.tech/api/${endpoint}/${id}`
                    );
                    const details = await responseDetails.json();
                    return {
                        ...item,
                        properties: {
                            ...details.result.properties,
                        },
                    };
                })
            );

            setStore({ [storeKey]: updatedResults });
        } catch (error) {
            console.error(`Error fetching`, error);
        }
    };
	const fetchInformation = async (type, id) => {
        try {
            const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
            const data = await response.json();

            if (!data || !data.result || !data.result.properties) {
                throw new Error(
                    `Invalid data format for ${type} with id ${id}`
                );
            }

            const properties = {
                ...data.result.properties,
                description:
                    data.result.description || "No description available.",
            };

            return properties;
        } catch (error) {
            console.error(
                `Error fetching information for ${type} with id ${id}:`,
                error
            );
            return null;
        }
    };
	return {
		store: {
			listStarships: [],
            listVehicles: [],
            listSpecies: [],
            infoCharacter: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getStarships: () => apiFetch("starships", "listStarships"),
            getVehicles: () => apiFetch("vehicles", "listVehicles"),
            getSpecies: () => apiFetch("species", "listSpecies"),
			getInformation: (type, id) => fetchInformation(type, id),
		}
	};
};

export default getState;
