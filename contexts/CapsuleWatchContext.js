import React, { createContext, useEffect, useReducer} from 'react';

import { getCapsuleWatch } from '../services/FullListService';

const CapsuleWatchContext = createContext();

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

const CapsuleWatchProvider = (props) => {
	let [capsuleWatch, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		getCapsuleWatch().then((response) => {
			dispatch({ type : ACTIONS.RELOAD_DATA, payload : response.data });
		});
		console.log('Requisição realizada');
	}, []);

	return (
		<CapsuleWatchContext.Provider value ={{ capsuleWatch, dispatch, ACTIONS}}>
			{props.children}
		</CapsuleWatchContext.Provider>
	);
}

export { CapsuleWatchProvider, ACTIONS };
export default CapsuleWatchContext;