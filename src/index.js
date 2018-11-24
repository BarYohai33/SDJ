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
        console.log('fdp tu log')
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
              console.log('Has messaging permission')
              firebase.messaging().getToken().then(token => {
                console.log(token);
              })
              this.createNotificationListeners()
              // user has permissions
            } else {
              firebase.messaging().requestPermission()
                .then(() => {
                  alert("User Now Has Permission")
                  console.log('Permission message')
                })
                .catch(error => {
                  alert("Error", error)
                  console.log('Poture')
                  // User has rejected permissions  
                });
            }
          });
          /*firebase.notifications().onNotification((notification) => {
            // You've received a notification that hasn't been displayed by the OS
            // To display it whilst the app is in the foreground, simply call the following
            firebase.notifications().displayNotification(notification);
          });*/
      /*this.messageListener = firebase.messaging().onMessage((message) => {
          // Process your notification as required
          
          const notification = new firebase.notifications.Notification()
          .setNotificationId('notificationId')
          .setTitle('Poture')
          .setBody('MPoture')
          .setData({
            Fdp: 'poture',
          });          
          console.log("LOG: ", JSON.stringify(message))
          firebase.notifications().displayNotification(notification);
        });*/
      }

  createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    const channel = new firebase.notifications.Android
    .Channel('Poture', 'channel', firebase.notifications.Android.Importance.Max)
    .setDescription('Notif');
    firebase.notifications().android.createChannel(channel);
    firebase.notifications().onNotification((notification) => {
        console.log('onNotification', notification);
        console.log('notifid', notification.notificationId, 'title', notification.title, 'body', notification.body)
        //notification
          //.android.setChannelId('test-channel')
          //
        notification
        .android.setChannelId('Poture')
        .android.setSmallIcon('ic_stat_ic_notification')
        firebase.notifications().displayNotification(notification);
    });

    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    firebase.notifications().onNotificationOpened((notificationOpen) => {
        const { title, body } = notificationOpen.notification;
        console.log('onNotificationOpened', notificationOpen);
    });

    firebase.notifications().getInitialNotification().then(initialNotification => {
      if (initialNotification) {
          const { title, body } = initialNotification.notification;
          console.log('getInitialNotification', initialNotification);
      }
      console.log('getInitialNotification untrue', initialNotification);
    })

    firebase.messaging().onMessage((message) => {
      //process data message
      console.log('onMessage', message);
      const notification = new firebase.notifications.Notification()
      .setNotificationId('notificationId')
      .setTitle('Poture')
      .setBody('Iench')
      .setData({
        Fdp: 'poture'
      });          
      console.log(message)
      firebase.notifications().displayNotification(notification);
    });
  }


  componentWillUnmount() {
    // this.notificationListener();
    // this.notificationOpenedListener();
    // this.initialNotification();
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
