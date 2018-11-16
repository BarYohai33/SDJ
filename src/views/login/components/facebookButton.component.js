// React
import React from 'react';
import { Button, Icon, Text } from 'native-base';

// Style
import Style from '../styles/facebookButton.style';

const FbButton = props => (
    <Button
        block
        iconLeft
        style={Style.button}
        onPress={props.press}
    >
        <Icon name='logo-facebook' />
        <Text>Se connecter avec facebook</Text>
    </Button>
);

export default FbButton;