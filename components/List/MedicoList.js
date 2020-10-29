import React, 
{
	useContext
} from 'react';

import {
	FlatList
} from 'react-native';

import MedicoContext from '../../contexts/MedicoContext';

import Medico from '../../components/Medico/Medico';

const MedicoList = (props) => {
	const { medicos } = useContext(MedicoContext);

	return (
		<FlatList
			data={medicos}
			renderItem={({item}) => <Medico medico = {item}/>}
			keyExtractor={(item) => item.codigo.toString()}/>
		
	);
}

export default MedicoList;