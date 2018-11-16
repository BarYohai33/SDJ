// Style.js
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const image = {
  marginTop: 30,
  resizeMode: 'stretch',
  width: 100,
  height: 160,
  alignSelf: 'center',
};

export default { image };