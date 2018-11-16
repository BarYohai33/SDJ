// Style.js
import { Platform } from 'react-native';

const left = {
    display: 'flex',
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
};

const body = {
    display: 'flex',
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
};

const icon = {
    color: (Platform.OS === 'ios') ? 'black' : 'white',
};

export default { left, icon, body };