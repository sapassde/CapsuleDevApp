import React, 
{
	useContext
} from 'react';

import {
	FlatList
} from 'react-native';

import HospitalContext from '../../contexts/HospitalContext';

import Hospital from '../../components/Hospital/Hospital';

const HospitalList = (props) => {
	const { hospitais } = useContext(HospitalContext);

	return (
		<FlatList
			data={hospitais}
			renderItem={({item}) => <Hospital hospital = {item}/>}
			keyExtractor={(item) => item.codigo.toString()}/>
		
	);
}

export default HospitalList;