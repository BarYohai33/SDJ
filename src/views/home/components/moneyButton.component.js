// React
import React from 'react';
import { Image } from 'react-native';
import { Button } from 'native-base';

// Style
import Style from '../styles/moneyButton.style';

const MoneyButton = props => (
	<Button
		style={Style.button}
		onPress={props.add}
	>
		<Image source={props.image} style={Style.image} />
	</Button>
);

export default MoneyButton;