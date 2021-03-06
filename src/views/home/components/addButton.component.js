// React
import React from 'react';
import { Button, Text, Icon } from 'native-base';

// Style
import Style from '../styles/addButton.style';

const AddButton = props => (
  <Button
    block
    iconLeft
    onPress={props.toggle}
    style={Style.button}
  >
    <Icon style={Style.text} ios='ios-cash' android='md-cash' />
    <Text uppercase={false} style={Style.text}>Autre montant</Text>
  </Button>
);

export default AddButton;