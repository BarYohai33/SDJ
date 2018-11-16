// Style.js
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const image = {
  resizeMode: 'stretch',
  width: width/3*0.7,
  height: width/3*0.7,
};

const button = {
  marginTop: 10,
  marginBottom: 10,
  width: width/3*0.7,
  height: width/3*0.7,
  borderRadius: width/3*0.7*0.5,
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  alignSelf: 'center',
};

export default { image, button };