// React
import React from 'react';
import { Platform } from 'react-native';
import { Header as Head, Body, Left, Right, Icon, Title, Button } from 'native-base';

// Firebase
import firebase from '../firebase/';

// Style
import Style from './style';

const Header = props => (
    <Head>
    {
        !props.back ? <Left style={Style.left} /> :
        <Left style={Style.left}>
            <Button transparent onPress={() => props.navigation.goBack()}>
                <Icon style={Style.icon} name={Platform.OS === 'ios' ? 'arrow-back' : 'arrow-round-back'} />
            </Button>
        </Left>
    }
    <Body style={Style.body}>
        <Title>Le Silence Des Justes</Title>
    </Body>
    {
        !props.logout && !props.cog ? <Right style={Style.left} /> :
        <Right style={Style.left}>
            <Button transparent onPress={props.cog ? () => props.navigation.navigate('Settings') : () => firebase.auth().signOut()}>
                <Icon style={Style.icon} name={props.cog ? 'settings' : 'power'} />
            </Button>
        </Right>
    }
    </Head>
);

export default Header;