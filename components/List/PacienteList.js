import React, 
{
	useContext
} from 'react';

import {
	FlatList
} from 'react-native';

import PacienteContext from '../../contexts/PacienteContext';

import Paciente from '../../components/Paciente/Paciente';

const PacienteList = (props) => {
	const { pacientes } = useContext(PacienteContext);

	return (
		<FlatList
			data={pacientes}
			renderItem={({item}) => <Paciente paciente = {item}/>}
			keyExtractor={(item) => item.codigo.toString()}/>
		
	);
}

export default PacienteList;