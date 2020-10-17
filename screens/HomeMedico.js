import React from 'react';
import { SafeAreaView } from 'react-native';

import {PacienteProvider} from '../contexts/PacienteContext';
import {MonitoramentoProvider} from '../contexts/MonitoramentoContext';

import PacienteList from '../components/List/PacienteList';
import MonitoramentoList from '../components/List/MonitoramentoList';

const HomeMedico = (props) => {
	return (
		<Text>
			Bem vindo, dr [nome-do-medico-aqui]
		</Text>
		<Text>
			Lista de pacientes
		</Text>
		<PacienteProvider>
			<SafeAreaView>
				<PacienteList />
			</SafeAreaView>
		</PacienteProvider>
		<Text>
			Lista de monitoramentos
		</Text>
		<MonitoramentoProvider>
			<SafeAreaView>
				<MonitoramentoList />
			</SafeAreaView>
		</MonitoramentoProvider>

	);
}

export default HomeMedico;