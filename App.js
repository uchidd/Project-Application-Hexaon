import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './pages/LoginPage';
import DrawerNavigator from './navigation/DrawerNavigator';
import { MenuProvider } from "react-native-popup-menu";
import Header from './headers/header';
import HeaderSearchWithButton from './headers/headerSearchWithButton';
import CardUser from './cards/cardUserAuthority';
import CardClient from './cards/cardClient'
import CardProduct from './cards/cardProduct';
import CardPrinciple from './cards/cardPrinciple';
import CardPipeline from './cards/cardPipeline'
import CardSalesAgenda from './cards/cardSalesAgenda'
import CardRoles from './cards/cardRolesAuthority'
import CardFolder from './cards/cardFolderFileManagement'
import CardFile from './cards/cardFileFileManagement'
import CardSignActivity from './cards/cardSignActivityLogActivity'
import CardUsersActivity from './cards/cardUsersActivityLogActivity'
import CardContact from './cards/cardContactBook';
import ContactBookPage from './pages/ContactBookPage';
import ModalDetailPrinciple from './modal_details/modalDetailPrinciple';
import ModalOptionAction from './modal/modalOptionAction';


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
            // <ModalDetailPrinciple/>
            // <ModalOptionAction/>
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