// React
import React from 'react';
import { Button, Icon, Text } from 'native-base';

// Style
import Style from '../styles/signUpButton.style';

const SignUpButton = props => (
    <Button
        block
        iconLeft
        light
        style={Style.button}
        onPress={props.press}
    >
        <Icon name='person-add' />
        <Text>S'inscrire</Text>
    </Button>
);

export default SignUpButton;