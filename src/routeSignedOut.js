// React
import React from 'react';
import { StackNavigator } from 'react-navigation';

// Screens
import Login from './views/login/';
import SignUp from './views/signup/';
import Forgot from './views/forgot/';
import Confirm from './views/confirm/';

// Header
import Header from './general/header/';

const RootNavigator = StackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: ({ navigation }) => ({
                header: () => <Header navigation={navigation} />,
            }),
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: ({ navigation }) => ({
                header: () => <Header navigation={navigation} back />,
            }),
        },
        Forgot: {
            screen: Forgot,
            navigationOptions: ({ navigation }) => ({
                header: () => <Header navigation={navigation} back />,
            }),
        },
        Confirm: {
            screen: Confirm,
            navigationOptions: ({ navigation }) => ({
                header: () => <Header navigation={navigation} back />,
            }),
        },
    },
    {
        initialRouteName: "Login",
    },
);

const withPropsRouter = props => <RootNavigator screenProps={props} />

export default withPropsRouter;