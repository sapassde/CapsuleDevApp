import React, { createContext, useEffect, useReducer} from 'react';

import { getMonitoramentos } from '../services/FullListService';

const MonitoramentoContext = createContext();

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

const MonitoramentoProvider = (props) {
	let [monitoramentos, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		getMonitoramentos().then((response) => {
			dispatch({ type : ACTIONS.RELOAD_DATA, payload : response.data });
		});
		console.log('Requisição realizada');
	}, []);

	return (
		<MonitoramentoContext.Provider value ={{ monitoramentos, dispatch, ACTIONS}}>
			{props.children}
		</MonitoramentoContext.Provider>
	);
}

export { MonitoramentoProvider, ACTIONS };
export default MonitoramentoContext;