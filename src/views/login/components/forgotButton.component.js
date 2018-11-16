// React
import React from 'react';
import { Button, Text } from 'native-base';

// Style
import Style from '../styles/forgotButton.style';

const ForgotButton = props => (
    <Button 
        bordered light
        style={Style.button}
        onPress={props.press}
    >
        <Text>Mot de passe oublié</Text>
    </Button>
);

export default ForgotButton;