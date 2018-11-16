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
        keyboardType='email-address'
        placeholder='E-mail...'
        value={props.mail}
        onChangeText={e => props.change('mail', e)}
      />
    </Item>
    <Item regular style={Style.item}>
      <Input
        secureTextEntry={true}
        placeholder='Mot de passe...'
        value={props.pass}
        onChangeText={e => props.change('pass', e)}
      />
    </Item>
    <Item regular style={Style.item}>
      <Input
        secureTextEntry={true}
        placeholder='Confirmer le mot de passe ...'
        value={props.passRepeat}
        onChangeText={e => props.change('passRepeat', e)}
      />
    </Item>
    {
      props.loading ?
      <Button block light style={Style.button}>
        <Spinner color='blue' />
      </Button> :
      <Button
        block
        light
        iconLeft
        style={Style.button}
        onPress={props.submit}
      >
        <Icon name='log-in' />
        <Text>S'inscrire</Text>
      </Button>
    }
  </Form>
);

export default SignupForm