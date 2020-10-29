import React, 
{
	useContext
} from 'react';

import {
	FlatList
} from 'react-native';

import CapsuleWatchContext from '../../contexts/CapsuleWatchContext';

import CapsuleWatch from '../../components/CapsuleWatch/CapsuleWatch';

const CapsuleWatchList = (props) => {
	const { capsuleWatch } = useContext(CapsuleWatchContext);

	return (
		<FlatList
			data={capsuleWatch}
			renderItem={({item}) => <CapsuleWatch capsuleWatch = {item}/>}
			keyExtractor={(item) => item.codigo.toString()}/>
		
	);
}

export default CapsuleWatchList;