import React, { createContext, useEffect, useReducer} from 'react';

import { getCapsuleControl } from '../services/FullListService';

const CapsuleControlContext = createContext();

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

const CapsuleControlProvider = (props) => {
	let [capsuleControl, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		getCapsuleControl().then((response) => {
			dispatch({ type : ACTIONS.RELOAD_DATA, payload : response.data });
		});
		console.log('Requisição realizada');
	}, []);

	return (
		<CapsuleControlContext.Provider value ={{ capsuleControl, dispatch, ACTIONS}}>
			{props.children}
		</CapsuleControlContext.Provider>
	);
}

export { CapsuleControlProvider, ACTIONS };
export default CapsuleControlContext;