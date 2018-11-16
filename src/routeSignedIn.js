// React
import React from 'react';
import { StackNavigator } from 'react-navigation';

// Screens
import Home from './views/home/';
import PaymentConfirm from './views/paymentConfirm/';
import Settings from './views/settings/';
import PersonnalInfos from './views/settings/personnalInfos/';
import History from './views/settings/history/';

// Header
import Header from './general/header/';

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: () => <Header navigation={navigation} cog />,
      }),
    },
    PaymentConfirm: {
      screen: PaymentConfirm,
      navigationOptions: ({ navigation }) => ({
        header: () => <Header navigation={navigation} back cog />,
      }),
    },
    Settings: {
      screen: Settings,
      navigationOptions: ({ navigation }) => ({
        header: () => <Header navigation={navigation} back logout />,
      }),
    },
    PersonnalInfos: {
      screen: PersonnalInfos,
      navigationOptions: ({ navigation }) => ({
        header: () => <Header navigation={navigation} back />,
      }),
    },
    History: {
      screen: History,
      navigationOptions: ({ navigation }) => ({
        header: () => <Header navigation={navigation} back />,
      }),
    },
  },
  {
    initialRouteName: "Home",
  },
);

const withPropsRouter = props => <RootNavigator screenProps={props} />

export default withPropsRouter;