import React from 'react';

import {
	StyleSheet,
	Text,
	View
} from 'react-native';

const Monitoramento = (props) => {

	const {monitoramento} = props;

	return (
		<View style={ styles.container }>
			<Text>
                {monitoramento.codigo}
            </Text>
		</View>
	);
};

export default Monitoramento;

const styles = StyleSheet.create({
	container : {
		marginBottom : 16
	}
});