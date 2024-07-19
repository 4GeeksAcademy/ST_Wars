const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			apiFetch: async (element,id) => {
				try{
					let resp = await fetch(`https://www.swapi.tech/api/${element}/${id}`)
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
		}
	};
};

export default getState;
