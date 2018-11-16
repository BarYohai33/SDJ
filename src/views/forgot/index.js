// React
import React, { Component } from 'react';
import { Container, Content, Toast } from 'native-base';

// Firebase
import firebase from '../../general/firebase/';

// Local
import BackgroundImage from '../../general/backgroundImage/';
import Form from './components/form.component';

class Forgot extends Component {
	constructor(props){
		super(props);

		this.state = {
			mail: "",
			loading: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(key, val) {
		let new_state = {};
		new_state[key] = val
		this.setState(new_state);
	}

	handleSubmit() {
		const mail = this.state.mail;
		this.setState({ loading: true });
		firebase.auth().sendPasswordResetEmail(mail)
		.then(user => {
			this.setState({ loading: false });
			this.props.navigation.navigate('Confirm');
		})
		.catch(error => this.showError(error.message));
	}
	
	showError(message) {
		this.setState({ loading: false });
		Toast.show({
			text: message,
			position: "bottom",
			buttonText: "OK",
		});
	}
		

	render() {
		return (
			<Container>
				<BackgroundImage dimensions={this.props.screenProps.dimensions} />
				<Content padder>
					<Form
						mail={this.state.mail}
						change={this.handleChange}
						submit={this.handleSubmit}
						loading={this.state.loading}
					/>
				</Content>
			</Container>
		);
	}
}

export default Forgot;
