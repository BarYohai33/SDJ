// React
import React from 'react';
import { Button, View, Text, Grid, Col, Spinner } from 'native-base';

// Styles
import Style from '../styles/displayer.style';

const Displayer = props => (
  <Grid style={Style.grid}>
    <Col size={5} style={Style.leftCol}>
    {
      props.loading ?
      <Button transparent>
        <Spinner color='blue' /> 
      </Button>:
      <Text style={Style.text}>
        Montant :{' '}
        <Text style={Style.text}>€ {Math.round(props.amount*100)/100}</Text>
      </Text>
    }
    </Col>
    <Col size={2}>
      <Button
        light
        full
        onPress={props.reset}
        style={Style.button}
      >
        <Text uppercase={false}>Vider</Text>
      </Button>
    </Col>
  </Grid>
);

export default Displayer;