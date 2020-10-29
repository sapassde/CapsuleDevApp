import React, { createContext, useEffect, useReducer} from 'react';

import { getHospitais } from '../services/FullListService';

const HospitalContext = createContext();

const ACTIONS = {
	RELOAD_DATA : "RELOAD_DATA",
	NOTHING : "NULL"
}

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.RELOAD_DATA :
			return action.payload;
		case ACTIONS.NOTHING :
			return state;
		default : 
			return state;
	}
}

const HospitalProvider = (props) => {
	let [hospitais, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		getHospitais().then((response) => {
			dispatch({ type : ACTIONS.RELOAD_DATA, payload : response.data });
		});
		console.log('Requisição realizada');
	}, []);

	return (
		<HospitalContext.Provider value ={{ hospitais, dispatch, ACTIONS}}>
			{props.children}
		</HospitalContext.Provider>
	);
}

export { HospitalProvider, ACTIONS };
export default HospitalContext;