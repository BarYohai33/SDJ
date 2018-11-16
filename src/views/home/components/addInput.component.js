// React
import React, { Component } from 'react';
import { Grid, Col, Button, Item, Input, Text, Icon } from 'native-base';

// Style
import Style from '../styles/addInput.style';

class AddInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  submit() {
    if (this.state.value) {
      this.props.add(parseFloat(this.state.value));  
    }
    this.props.toggle();
  }

  render() {
    return (
      <Grid style={Style.grid}>
        <Col size={5}>
          <Item regular>
            <Input
              autoFocus
              keyboardType='numeric'
              maxLength={14}
              value={this.state.value}
              onChangeText={this.handleChange}
              style={Style.text}
            />
          </Item>
        </Col>
        <Col size={2}>
          <Button
            success
            block
            onPress={this.submit}
            style={Style.button}
          >
            <Text>Ok</Text>
          </Button>
        </Col>
      </Grid>
    );
  }
}

export default AddInput;