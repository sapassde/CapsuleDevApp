import React from 'react';
import { SafeAreaView } from 'react-native';

import {PacienteProvider} from '../contexts/PacienteContext';

import PacienteList from '../components/List/PacienteList';

const Main = (props) => {
	return (
		<PacienteProvider>
			<SafeAreaView>
				<PacienteList />
			</SafeAreaView>
		</PacienteProvider>
	);
}

export default Main;