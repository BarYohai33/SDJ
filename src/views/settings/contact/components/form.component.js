// React
import React from 'react';
import { Form, Item, Input, Icon, Button, Text, Textarea, Spinner } from 'native-base';

// Style
import Style from '../styles/form.style';

const SignupForm = props => (
  <Form style={Style.form}>
    <Item regular style={Style.item}>
      <Input
        keyboardType='default'
        placeholder='Nom...'
        value={props.nom}
        onChangeText={e => props.change('nom', e)}
      />
    </Item>
    <Item regular style={Style.item}>
      <Input
        keyboardType='default'
        placeholder='Prénom...'
        value={props.prenom}
        onChangeText={e => props.change('prenom', e)}
      />
    </Item>
    <Item regular style={Style.item}>
      <Input
        keyboardType='default'
        placeholder='E-mail...'
        value={props.email}
        onChangeText={e => props.change('email', e)}
      />
    </Item>
    <Item regular style={Style.item}>
      <Textarea
        style={{ width: '100%' }}
        keyboardType='default'
        placeholder='Message...'
        multiline={true}
        onChangeText={e => props.change('message', e)}
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
        <Icon ios="ios-send" android="md-send" />
        <Text>Envoyer à l'administrateur</Text>
      </Button>
    }
  </Form>
);

export default SignupForm