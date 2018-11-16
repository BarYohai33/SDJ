// React
import React from 'react';
import { View, Card, CardItem, Body, Item, Icon, Button, Text } from 'native-base';

const Message = props => (
	<View>
		<Card>
			<CardItem>
				<Body>
					<Text>
						Un mail de réinitialisation de mot de passe vous a été envoyé à l'adresse fournie.
						(Consultez également vos spams si vous ne trouvez pas ce mail).
					</Text>
				</Body>
			</CardItem>
		</Card>
		<Button
			block
			light
			iconLeft
			onPress={props.press}
		>
			<Icon name='arrow-round-back' />
			<Text>Revenir a la connexion</Text>
		</Button>
	</View>
);

export default Message;