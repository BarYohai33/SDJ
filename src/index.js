// React
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Root, Spinner } from 'native-base';

// Firebase
import firebase from './general/firebase/';
// Routes
import SignedIn from './routeSignedIn';
import SignedOut from './routeSignedOut';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dimensions: {
                width: undefined,
                height: undefined,
            },
            loading: true,
            user: null,
        };

        this.onLayout = this.onLayout.bind(this);
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user != null) {
                firebase.database().ref(`users/${user.uid}`).once('value').then(snapshot => {
                    if (snapshot.val() != null) {
                        this.setState({ user, loading: false });
                    } else {
                        firebase.database().ref(`users/${user.uid}`).set({
                            displayName: user.displayName,
                            email: user.email,
                            amount: 0,
                            address: "",
                            postalCode: "",
                            city: "",
                        })
                        .then(() => this.setState({ user, loading: false }));
                    }
                });
            } else {
                this.setState({ user, loading: false });
            }
        });
    }

    onLayout(event) {
        this.setState({ dimensions: Dimensions.get('window') });
    }

    render() {
        console.disableYellowBox = true
        return (
            <Root onLayout={this.onLayout}>
            {
                this.state.loading ? <Spinner color='blue' /> :
                this.state.user ?
                <SignedIn dimensions={this.state.dimensions} /> :
                <SignedOut dimensions={this.state.dimensions} />
            }
            </Root>
        );
    }
}

export default App;
