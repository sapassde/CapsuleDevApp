import React from 'react';

import {
	StyleSheet,
	Text,
	View
} from 'react-native';

const CapsuleWatch = (props) => {

	const {capsuleWatch} = props;

	return (
		<View style={ styles.container }>
			<Text>
                {CapsuleWatch.codigo}
            </Text>
		</View>
	);
};

export default CapsuleWatch;

const styles = StyleSheet.create({
	container : {
		marginBottom : 16
	}
});