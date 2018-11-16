// React
import React, { Component } from 'react';
import { Container, View, Text, Button, Icon } from 'native-base';

// Local
import BackgroundImage from '../../general/backgroundImage/';

// Style
import Style from './styles/paymentConfirm.style';

const PaymentConfirm = props => (
  <Container>
    <BackgroundImage dimensions={props.screenProps.dimensions} />
    <View style={Style.view}>
      <Text style={Style.text}>Merci pour votre don !</Text>
      <Button
        block light
        iconLeft
        style={Style.button}
        onPress={() => props.navigation.navigate('History')}
      >
        <Icon name='list-box' />
        <Text>Historique des dons</Text>
      </Button>
    </View>
  </Container>
);

export default PaymentConfirm;