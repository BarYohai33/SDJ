// React
import React from 'react';
import { Form, Item, Input, Icon, Button, Text, Spinner } from 'native-base';

// Style
import Style from '../styles/form.style';

const LoginForm = props => (
    <Form style={Style.form}>
        <Item regular style={Style.item}>
            <Icon
                active
                name='mail'
                style={Style.icon}
            />
            <Input
                keyboardType='email-address'
                placeholder='E-mail...'
                value={props.mail}
                onChangeText={e => props.change('mail', e)}
            />
        </Item>
        <Item regular style={Style.item}>
            <Icon
                active
                name='lock'
                style={Style.icon}
            />
            <Input
                secureTextEntry={true}
                placeholder='Mot de passe...'
                value={props.pass}
                onChangeText={e => props.change('pass', e)}
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
                <Text>Se connecter</Text>
            </Button>
        }
    </Form>
);

export default LoginForm