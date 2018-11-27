// React
import React from 'react';
import { Linking, Platform, Image } from 'react-native';
import { Footer as NBFooter, FooterTab, Button, Text, Icon, Grid, Col } from 'native-base';

// Local
import Style from '../styles/footer.style';

const Footer = props => (
	<NBFooter>
		<FooterTab>
			<Button
				full light
				iconLeft
				style={Style.button}
				onPress={props.processPayment}
			>
			<Text uppercase={false} style={Style.text}>Payer { props.canMakeNativePayments ? 'avec' : '' }</Text>
			{ props.canMakeNativePayments === 'ios'
				? <Image source={require("../../../../img/APay.png")} style={Style.image} />
				: props.canMakeNativePayments === 'android' 
					? <Image source={require("../../../../img/GPay.png")} style={Style.image} />
					: <Icon style={Style.iconText} ios='ios-card' android='md-card' />
			}
			</Button>
		</FooterTab>
	</NBFooter>
);

export default Footer;