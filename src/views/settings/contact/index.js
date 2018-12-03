// React
import React, { Component } from 'react';
import { Container, Content, Text, Toast } from 'native-base';

// Firebase
import firebase from '../../../general/firebase/';

// Local
import BackgroundImage from '../../../general/backgroundImage/';
import Form from './components/form.component';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nom: "",
      prenom: "",
      email: "",
      message: "",
      loading: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showError = this.showError.bind(this);
  }

  componentDidMount() {
    const { uid } = firebase.auth().currentUser;
    firebase.database().ref(`users/${uid}`).once('value').then(snapshot => {
      this.setState({
        email: snapshot.val().email,
        nom: snapshot.val().displayName.split(' ')[0],
        prenom: snapshot.val().displayName.split(' ')[1],
        loading: false,
      });
    });
  }

  handleChange(key, val) {
    let new_state = {...this.state};
    new_state[key] = val
    this.setState(new_state);
  }

  handleSubmit() {
    const { message } = this.state;
    const { uid } = firebase.auth().currentUser;
    this.setState({ loading: true });

    firebase.database().ref("/contacts").push().set({
      userId: uid,
      message: message
    })
    .then(() => this.props.navigation.goBack())
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
            email={this.state.email}
            nom={this.state.nom}
            prenom={this.state.prenom}
            message={this.state.message}
            loading={this.state.loading}
            change={this.handleChange}
            submit={this.handleSubmit}
          />
        </Content>
      </Container>
    );
  }
}

export default Contact;