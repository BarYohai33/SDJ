// React
import React from 'react';
import { Linking, Platform } from 'react-native';
import { Footer as NBFooter, FooterTab, Button, Text, Icon, Grid, Col } from 'native-base';

// Local
import Style from '../styles/footer.style';

const Footer = props => (
	<NBFooter>
		<FooterTab>
			<Button
				full primary
				iconLeft
				style={Style.button}
				onPress={props.processPayment}
			>
				<Icon style={Style.text} ios='ios-card' android='md-card' />
				<Text style={Style.text}>Payer</Text>
			</Button>
		</FooterTab>
	</NBFooter>
);

export default Footer;