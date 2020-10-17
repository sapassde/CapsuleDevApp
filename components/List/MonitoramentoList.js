import React, 
{
	useContext
} from 'react';

import {
	FlatList
} from 'react-native';

import MonitoramentoContext from '../../contexts/MonitoramentoContext';

import Monitoramento from '../../components/Monitoramento/Monitoramento';

const MonitoramentoList = (props) => {
	const { monitoramento } = useContext(MonitoramentoContext);

	return (
		<FlatList
			data={monitoramentos}
			renderItem={({item}) => <Monitoramento monitoramento = {item}/>}
			keyExtractor={(item) => item.codigo.toString()}/>
		
	);
}

export default MonitoramentoList;