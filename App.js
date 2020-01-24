import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './pages/LoginPage';
import DrawerNavigator from './navigation/DrawerNavigator';
import { MenuProvider } from "react-native-popup-menu";
import Header from './components/header';
import HeaderSearchWithButton from './components/headerSearchWithButton';

export default class App extends Component {

    render() {
        return(
            // <HeaderSearchWithButton/>
            <MenuProvider>
                <DrawerNavigator/>
            </MenuProvider>
        )
    }
}

const AppStackNavigator = createStackNavigator({
    LoginPage : LoginPage,
    DrawerNavigator : DrawerNavigator,
    Header : Header
},{
    initialRouteName: 'LoginPage',
    defaultNavigationOptions: {
        headerShown: false
    },
  });

const AppContainer = createAppContainer(AppStackNavigator);