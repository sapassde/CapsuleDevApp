import React, 
{
	useContext
} from 'react';

import {
	FlatList
} from 'react-native';

import CapsuleControlContext from '../../contexts/CapsuleControlContext';

import CapsuleControl from '../../components/CapsuleControl/CapsuleControl';

const CapsuleControlList = (props) => {
	const { capsuleControl } = useContext(CapsuleControlContext);

	return (
		<FlatList
			data={capsuleControl}
			renderItem={({item}) => <CapsuleControl capsuleControl = {item}/>}
			keyExtractor={(item) => item.codigo.toString()}/>
		
	);
}

export default CapsuleControlList;