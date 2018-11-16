// React
import React from 'react';
import { Form, Item, Input, Icon, Button, Text, Spinner } from 'native-base';

// Style
import Style from '../styles/form.style';

const ForgotForm = props => (
	<Form style={Style.form}>
		<Item regular style={Style.item}>
			<Icon
				active
				name='mail'
				style={Style.icon}
			/>
			<Input
				keyboardType='email-address'
				placeholder='E-mail...'
				value={props.mail}
				onChangeText={e => props.change('mail', e)}
			/>
		</Item>
		{
			props.loading ?
			<Button block light style={Style.button}>
				<Spinner color='blue' />
			</Button> :
			<Button
				block
				light
				iconLeft
				style={Style.button}
				onPress={props.submit}
			>
				<Icon name='unlock' />
				<Text>Récupérer mon mot de passe</Text>
			</Button>
		}
	</Form> 
);

export default ForgotForm;