import React, { createContext, useEffect, useReducer} from 'react';

import { getPacientes } from '../services/FullListService';

const PacienteContext = createContext();

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

const PacienteProvider = (props) => {
	let [pacientes, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		getPacientes().then((response) => {
			dispatch({ type : ACTIONS.RELOAD_DATA, payload : response.data });
		});
		console.log('Requisição realizada');
	}, []);

	return (
		<PacienteContext.Provider value ={{ pacientes, dispatch, ACTIONS}}>
			{props.children}
		</PacienteContext.Provider>
	);
}

export { PacienteProvider, ACTIONS };
export default PacienteContext;