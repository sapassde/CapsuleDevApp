import React, { createContext, useEffect, useReducer} from 'react';

import { getMedicos } from '../services/FullListService';

const MedicoContext = createContext();

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

const MedicoProvider = (props) => {
	let [medicos, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		getMedicos().then((response) => {
			dispatch({ type : ACTIONS.RELOAD_DATA, payload : response.data });
		});
		console.log('Requisição realizada');
	}, []);

	return (
		<MedicoContext.Provider value ={{ medicos, dispatch, ACTIONS}}>
			{props.children}
		</MedicoContext.Provider>
	);
}

export { MedicoProvider, ACTIONS };
export default MedicoContext;