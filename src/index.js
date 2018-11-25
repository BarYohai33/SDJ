// React
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Root, Spinner } from 'native-base';

// Firebase
import firebase from './general/firebase/';
//import RNfirebase from 'react-native-firebase';
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
        firebase.messaging().hasPermission()
          .then(enabled => {
            if (enabled) {
              this.createNotificationListeners()
              firebase.messaging().getToken().then(token => {
                console.log(token);
              })
            } else {
              firebase.messaging().requestPermission()
                .then(() => {
                  console.log('Messaging permission acquired')
                })
                .catch(error => {
                  console.log('Messaging permission denied', error)
                });
            }
          });
      }

  createNotificationListeners() {
    const channel = new firebase.notifications.Android
    .Channel('Tsedaka', 'channel', firebase.notifications.Android.Importance.Max)
    .setDescription('Notif');
    firebase.notifications().android.createChannel(channel);
    this.notificationListener = firebase.notifications().onNotification((notification) => {
        console.log('onNotification', notification);
        notification
        .android.setChannelId('Tsedaka')
        .android.setSmallIcon('ic_stat_ic_notification')
        firebase.notifications().displayNotification(notification);
    });

    firebase.notifications().onNotificationOpened((notificationOpen) => {
        console.log('onNotificationOpened', notificationOpen);
    });
  }


  componentWillUnmount() {
    this.notificationListener();
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
