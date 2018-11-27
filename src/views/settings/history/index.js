// React
import React, { Component } from 'react';
import { Linking, ScrollView} from 'react-native';
import { Container, Spinner, List, ListItem, Text, Right, Body, Icon, Button, } from 'native-base';
import sha256 from 'sha256';

// Firebase
import firebase from '../../../general/firebase/';

// Local
import BackgroundImage from '../../../general/backgroundImage/';

// Style
import Style from '../styles/settings.style';

// Config
import { CERFA_URL } from '../../../config/secrets';

class History extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      userData: '',
      donations: [],
    };

  }

  getFrDateTime (transformedDate) {
    const date = new Date(transformedDate)

    return ('0' + date.getDate()).slice(-2) + '/'
                + ('0' + (date.getMonth()+1)).slice(-2) + '/'
                + date.getFullYear() + ' '
                + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
                + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
  }

  componentWillMount() {
    const { uid } = firebase.auth().currentUser;
    firebase.database().ref(`users/${uid}`).once('value').then(snap => {
      firebase.database().ref('donations').orderByChild('date').on('value', snapshot => {
        let donations = [];
        snapshot.forEach(donation => {
          if (donation.val().userId === uid) {
            donations.splice(0, 0, donation.val());
          }
        });
        donations.sort(function (a, b) {
          return new Date(a.date) - new Date(b.date);
        });
        this.setState({ userData: snap.val(), donations, loading: false });
      });
    });
  }

  render() {
    const { userData } = this.state;
    return (
      <Container>
      <ScrollView
    ref={ref => this.scrollView = ref}
    onContentSizeChange={(contentWidth, contentHeight)=>{        
        this.scrollView.scrollToEnd({animated: true});
    }}>

        <BackgroundImage dimensions={this.props.screenProps.dimensions} />
        {
          this.state.loading ? <Spinner color='blue' /> :
          <List style={Style.list}>
          {
            this.state.donations.map((donation, key) => (
              <ListItem icon key={key}>
                <Body>
                  <Text>{ this.getFrDateTime(donation.date) } - {donation.amount} €</Text>
                </Body>
                <Right>
                  <Button icon light onPress={() => {
                    if (userData.displayName === "" || userData.address === "" || userData.city === "" || userData.postalCode === "") {
                      alert("Veuillez renseigner vos coordonnées personnelles");
                      this.props.navigation.goBack();
                    } else {
                      Linking.openURL(`${CERFA_URL}?ref=R${6000+this.state.donations.length}&name=${userData.displayName}&address=${userData.address}&postalCode=${userData.postalCode}&city=${userData.city}&amount=${donation.amount}&date=${new Date(donation.date).getDate()}/${new Date(donation.date).getMonth()+1}/${new Date(donation.date).getFullYear()}&paymentType=${donation.type}&sign=${sha256(`BarYohai33R${6000+this.state.donations.length}${userData.displayName}${userData.address}${userData.postalCode}${userData.city}${donation.amount}${new Date(donation.date).getDate()}/${new Date(donation.date).getMonth()+1}/${new Date(donation.date).getFullYear()}${donation.type}`)}`)
                    }
                  }}>
                    <Icon style={{ color: '#000000' }} name='document' />
                  </Button>
                </Right>
              </ListItem>
            ))
          }
          </List>
        }
        </ScrollView>
      </Container>
    );
  }
}

export default History;