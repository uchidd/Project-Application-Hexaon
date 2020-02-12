import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './pages/LoginPage';
import DrawerNavigator from './navigation/DrawerNavigator';
import { MenuProvider } from "react-native-popup-menu";
import Header from './components/header';
import HeaderSearchWithButton from './components/headerSearchWithButton';
import CardUser from './card/cardUserAuthority';
import CardClient from './card/cardClient'
import CardProduct from './card/cardProduct';
import CardPrinciple from './card/cardPrinciple';
import CardPipeline from './card/cardPipeline'
import CardSalesAgenda from './card/cardSalesAgenda'
import CardRoles from './card/cardRolesAuthority'
import CardFolder from './card/cardFolderFileManagement'
import CardFile from './card/cardFileFileManagement'
import CardSignActivity from './card/cardSignActivityLogActivity'
import CardUsersActivity from './card/cardUsersActivityLogActivity'
import CardContact from './card/cardContactBook';
import ModalViewData from './modal/modalViewData';
import ContactBookPage from './pages/ContactBookPage';


export default class App extends Component {

    render() {
        return(
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
            // <CardUsersActivity/>
            // <CardContact/>
            // <LoginPage/>
            // <ModalDetailsContactBook/>
            <MenuProvider>
                <DrawerNavigator/>
            </MenuProvider>
            // <ContactBookPage/>
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