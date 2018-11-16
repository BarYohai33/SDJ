// React
import React, { Component } from 'react';
import { Container, Content, Text, Toast } from 'native-base';

// Firebase
import firebase from '../../general/firebase/';

// Local
import BackgroundImage from '../../general/backgroundImage/';
import Form from './components/form.component';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nom: "",
            prenom: "",
            mail: "",
            pass: "",
            passRepeat: "",
            loading: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showError = this.showError.bind(this);
    }

    handleChange(key, val) {
        let new_state = {};
        new_state[key] = val
        this.setState(new_state);
    }

    handleSubmit() {
        const { nom, prenom, mail, pass, passRepeat } = this.state;
        this.setState({ loading: true });
        if (pass === passRepeat) {
            firebase.auth().createUserWithEmailAndPassword(mail, pass).then(data => {
                firebase.database().ref(`users/${data.user.uid}`).set({
                    displayName: `${nom} ${prenom}`,
                    email: mail,
                    amount: 0,
                    address: "",
                    postalCode: "",
                    city: "",
                });
            })
            .catch(error => this.showError(error.message));
        } else {
            this.showError("Les 2 mots de passes ne correspondent pas");
        }
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
                <BackgroundImage
                    dimensions={this.props.screenProps.dimensions}
                />
                <Content padder>
                    <Form
                        nom={this.state.nom}
                        prenom={this.state.prenom}
                        mail={this.state.mail}
                        pass={this.state.pass}
                        passRepeat={this.state.passRepeat}
                        loading={this.state.loading}
                        change={this.handleChange}
                        submit={this.handleSubmit}
                    />
                </Content>
            </Container>
        );
    }
}

export default Signup;