import React from 'react';

import {
	StyleSheet,
	Text,
	View
} from 'react-native';

const Medico = (props) => {

	const {Medico} = props;

	return (
		<View style={ styles.container }>
			<Text>
                {Medico.nome}
            </Text>
		</View>
	);
};

export default Medico;

const styles = StyleSheet.create({
	container : {
		marginBottom : 16
	}
});
