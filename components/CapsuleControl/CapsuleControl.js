import React from 'react';

import {
	StyleSheet,
	Text,
	View
} from 'react-native';

const CapsuleControl = (props) => {

	const {capsuleControl} = props;

	return (
		<View style={ styles.container }>
			<Text>
                {CapsuleControl.codigo}
            </Text>
		</View>
	);
};

export default CapsuleControl;

const styles = StyleSheet.create({
	container : {
		marginBottom : 16
	}
});