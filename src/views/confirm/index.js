//React
import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { NavigationActions } from 'react-navigation';

// Local
import BackgroundImage from '../../general/backgroundImage/';
import Message from './components/message.component';

const Confirm = props => {
	return (
		<Container>
			<BackgroundImage dimensions={props.screenProps.dimensions} />
			<Content padder>
				<Message press={() => props.navigation.navigate('Login')} />
			</Content>
		</Container>
	);
};

export default Confirm;