import React from 'react';

import {
	StyleSheet,
	Text,
	View
} from 'react-native';

const Paciente = (props) => {

	const {paciente} = props;

	return (
		<View style={ styles.container }>
			<Text>
                {paciente.nome}
            </Text>
		</View>
	);
};

export default Paciente;

const styles = StyleSheet.create({
	container : {
		marginBottom : 16
	}
});