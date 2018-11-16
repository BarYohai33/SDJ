// React
import React from 'react';
import { Form, Item, Input, Icon, Button, Text, Spinner } from 'native-base';

// Style
import Style from '../styles/form.style';

const SignupForm = props => (
  <Form style={Style.form}>
    <Item regular style={Style.item}>
      <Input
        keyboardType='default'
        placeholder='Adresse...'
        value={props.address}
        onChangeText={e => props.change('address', e)}
      />
    </Item>
    <Item regular style={Style.item}>
      <Input
        keyboardType='default'
        placeholder='Code postal...'
        value={props.postalCode}
        onChangeText={e => props.change('postalCode', e)}
      />
    </Item>
    <Item regular style={Style.item}>
      <Input
        keyboardType='default'
        placeholder='Ville...'
        value={props.city}
        onChangeText={e => props.change('city', e)}
      />
    </Item>
    {
      props.loading ?
      <Button block light style={Style.button}>
        <Spinner color='blue' />
      </Button> :
      <Button
        block light
        iconLeft
        style={Style.button}
        onPress={props.submit}
      >
        <Icon ios="ios-checkmark-circle-outline" android="md-checkmark-circle-outline" />
        <Text>Enregistrer les informations</Text>
      </Button>
    }
  </Form>
);

export default SignupForm