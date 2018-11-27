// React
import React from 'react';
import { Image } from 'react-native';
import { Button } from 'native-base';
import Sound from 'react-native-sound';

// Style
import Style from '../styles/moneyButton.style';

const coinToss = new Sound('cointoss.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Failed to load the sound', error);
    return;
  }
});

function playSound () {
	coinToss.play((success) => {
	  if (!success) {
	    console.log('playback failed due to audio decoding errors');
	    whoosh.reset();
	  }
	});
}

const MoneyButton = props => (
	<Button
		style={Style.button}
		onPress={
			() => {
				props.add()
				playSound()
			}	
		}
	>
		<Image source={props.image} style={Style.image} />
	</Button>
);

export default MoneyButton;