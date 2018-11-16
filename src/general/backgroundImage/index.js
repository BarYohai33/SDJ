// React
import React from 'react';
import { Image } from 'react-native';

// Style
import Style from './style';

// Imgs
const backgroundImage = require('../../../img/back.jpg');

const BackgroundImage = props => <Image source={backgroundImage} style={Style.background(props.dimensions)} />;

export default BackgroundImage;