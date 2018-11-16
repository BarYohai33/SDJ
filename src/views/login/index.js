// React
import React, { Component } from 'react';
import { Container, Content, Text, Toast } from 'native-base';

// FB Login
import { LoginManager, AccessToken } from 'react-native-fbsdk';

// Firebase
import firebase from '../../general/firebase/';

// Local
import BackgroundImage from '../../general/backgroundImage/';
import Form from './components/form.component';
import FacebookButton from './components/facebookButton.component';
import SignUpButton from './components/signUpButton.component';
import ForgotButton from './components/forgotButton.component';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: "",
            pass: "",
            loading: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFbButtonPress = this.handleFbButtonPress.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleForgot = this.handleForgot.bind(this);
        this.showError = this.showError.bind(this);
    }

    handleChange(key, val) {
        let new_state = {...this.state};
        new_state[key] = val
        this.setState(new_state);
    }

    handleSubmit() {
        const { mail, pass } = this.state;
        this.setState({ loading: true });
        firebase.auth().languageCode = 'fr_FR';
        firebase.auth().signInWithEmailAndPassword(mail, pass)
        .then(user => this.setState({ loading: false }))
        .catch(error => this.showError(error.message));
    }

    handleFbButtonPress() {
        this.setState({ loading: true });
        LoginManager.logInWithReadPermissions(["email", "public_profile"]).then(
            result => {
                if (result.isCancelled) this.showError("Connexion annulée");
                else {
                    AccessToken.getCurrentAccessToken().then(data => {
                        const { accessToken } = data;
                        const credential = firebase.auth.FacebookAuthProvider.credential(accessToken);
                        firebase.auth().signInAndRetrieveDataWithCredential(credential)
                        .then(user => this.setState({ loading: false }))
                        .catch(error => this.showError(`Erreur de connexion: ${error.message}`));
                    });
                }
            },
            error => {
                this.showError(`Connexion échouée avec le message: ${error}`);
            }
        );
    }

    handleSignUp() {
        this.props.navigation.navigate('SignUp');
    }

    handleForgot() {
        this.props.navigation.navigate('Forgot');
    }

    showError(message) {
        this.setState({ loading: false });
        Toast.show({
            text: message,
            position: "bottom",
            buttonText: "OK",
            duration: 100000,
        });
    }

    render() {
        return (
            <Container>
                <BackgroundImage
                    dimensions={this.props.screenProps.dimensions}
                />
                <Content padder>
                    <Form
                        mail={this.state.mail}
                        pass={this.state.pass}
                        loading={this.state.loading}
                        change={this.handleChange}
                        submit={this.handleSubmit}
                    />
                    <FacebookButton
                        press={this.handleFbButtonPress}
                    />
                    <SignUpButton
                        press={this.handleSignUp}
                    />
                    <ForgotButton
                        press={this.handleForgot}
                    />
                </Content>
            </Container>
        );
    }
}

export default Login;