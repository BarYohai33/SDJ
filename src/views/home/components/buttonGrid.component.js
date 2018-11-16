// React
import React from 'react';
import { Grid, Row, Col } from 'native-base';

// Local
import MoneyButton from './moneyButton.component';

const ButtonGrid = props => (
  <Grid>
    <Row size={1}>
      <Col size={1}>
        <MoneyButton
          image={require("../../../../img/5cents.png")}
          add={() => props.add(0.05)}
        />
      </Col>
      <Col size={1}>
        <MoneyButton
          image={require("../../../../img/10cents.png")}          
          add={() => props.add(0.10)}
        />
      </Col>
      <Col size={1}>
        <MoneyButton
          image={require("../../../../img/20cents.png")}
          add={() => props.add(0.20)}
        />
      </Col>
    </Row>
    <Row size={1}>
      <Col size={1}>
        <MoneyButton
          image={require("../../../../img/50cents.png")}
          add={() => props.add(0.50)}
        />
      </Col>
      <Col size={1}>
        <MoneyButton
          image={require("../../../../img/1euro.png")}
          add={() => props.add(1.00)}
        />
      </Col>
      <Col size={1}>
        <MoneyButton
          image={require("../../../../img/2euro.png")}
          add={() => props.add(2.00)}
        />
      </Col>
    </Row>
  </Grid>
);

export default ButtonGrid;