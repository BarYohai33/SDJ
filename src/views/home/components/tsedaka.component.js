// React
import React from 'react';
import { Image } from 'react-native';

// Local
import Style from '../styles/tsedaka.style';

const Tsedaka = props => (
    <Image source={require("../../../../img/box.png")} style={Style.image} />
);

export default Tsedaka;