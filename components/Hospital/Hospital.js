import React from 'react';

import {
	StyleSheet,
	Text,
	View
} from 'react-native';

const Hospital = (props) => {

	const {Hospital} = props;

	return (
		<View style={ styles.container }>
			<Text>
                {Hospital.nome}
            </Text>
		</View>
	);
};

export default Hospital;

const styles = StyleSheet.create({
	container : {
		marginBottom : 16
	}
});
