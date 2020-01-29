import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './pages/LoginPage';
import DrawerNavigator from './navigation/DrawerNavigator';
import { MenuProvider } from "react-native-popup-menu";
import Header from './components/header';
import HeaderSearchWithButton from './components/headerSearchWithButton';
import CardUser from './components/cardUserAuthority';
import CardClient from './components/cardClient'
import CardProduct from './components/cardProduct';
import CardPrinciple from './components/cardPrinciple';
import CardPipeline from './components/cardPipeline'
import CardSalesAgenda from './components/cardSalesAgenda'
import CardRoles from './components/cardRolesAuthority'
import CardFolder from './components/cardFolderFileManagement'
import CardFile from './components/cardFileFileManagement'
import CardSignActivity from './components/cardSignActivityLogActivity'
import CardUsersActivity from './components/cardUsersActivityLogActivity'

export default class App extends Component {

    render() {
        return(
<<<<<<< HEAD
            <CardUser/> 
=======
            // <CardUser/>
            // <CardClient/>
            // <CardProduct/>
            // <CardPrinciple/>
            // <CardPipeline/>
            // <CardSalesAgenda/>
            // <CardRoles/>
            // <CardFolder/>
            // <CardFile/>
            // <CardSignActivity/>
            <CardUsersActivity/>
>>>>>>> e482f9a83f2f01afeee4eaf5f8d4c1468cfa5d77
            // <MenuProvider>
            //     <DrawerNavigator/>
            // </MenuProvider>
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