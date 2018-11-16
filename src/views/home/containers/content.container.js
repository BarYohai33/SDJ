// React
import React, { Component } from 'react';
import { Content as NBContent, Item, Input } from 'native-base';

// Local
import Displayer from '../components/displayer.component';
import AddButton from '../components/addButton.component';
import AddInput from '../components/addInput.component';
import ButtonGrid from '../components/buttonGrid.component';
import Tsedaka from '../components/tsedaka.component';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: false,
    };

    this.toggleInput = this.toggleInput.bind(this);
  }

  toggleInput() {
    this.setState({ input: !this.state.input });
  }

  render() {
    return (
      <NBContent padder>
        <Displayer
          amount={this.props.amount}
          reset={this.props.resetAmount}
          loading={this.props.loading}
        />
        {
          this.state.input ?
          <AddInput
            toggle={this.toggleInput}
            add={this.props.addAmount}
          /> :
          <AddButton
            toggle={this.toggleInput}
          />
        }
        <ButtonGrid 
          add={this.props.addAmount}
        />
        <Tsedaka/>
      </NBContent>
    );
  }
}

export default Content;