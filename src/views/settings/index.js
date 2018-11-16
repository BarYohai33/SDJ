// React
import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Icon, Left, Body, Button } from 'native-base';

// Firebase
import firebase from '../../general/firebase/';

// Local
import BackgroundImage from '../../general/backgroundImage/';

// Style
import Style from './styles/settings.style';

const Settings = props => (
  <Container>
    <BackgroundImage dimensions={props.screenProps.dimensions} />
    <List style={Style.list}>
      <ListItem icon onPress={() => props.navigation.navigate('PersonnalInfos')}>
        <Left><Icon name='person' /></Left>
        <Body><Text style={Style.text}>Informations personnelles</Text></Body>
      </ListItem>
      <ListItem icon onPress={() => props.navigation.navigate('History')}>
        <Left><Icon name='list-box' /></Left>
        <Body><Text style={Style.text}>Historique des dons</Text></Body>
      </ListItem>
    </List>
    <Button
      block danger
      iconLeft
      style={Style.button}
      onPress={() => firebase.auth().signOut()}
    >
      <Icon name='log-out' />
      <Text>Se déconnecter</Text> 
    </Button>
  </Container>
);

export default Settings;