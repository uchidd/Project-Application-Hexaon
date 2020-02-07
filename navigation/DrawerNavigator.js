import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ProductPage from '../pages/ProductPage';
import ClientPage from '../pages/ClientPage';
import ContactBookPage from '../pages/ContactBookPage';
import PrinciplePage from '../pages/PrinciplePage';
import PipelinePage from '../pages/PipelinePage';
import LeadProjectPage from '../pages/LeadProjectPage';
import SalesAgendaPage from '../pages/SalesAgendaPage';
import FileManegementPage from '../pages/FileManegementPage';
import LogActivityPage from '../pages/LogActivityPage';
import HomePage from '../pages/HomePageKaTaren';
import AuthorityUserPage from "../pages/AuthorityUserPage";
import AuthorityRolePage from "../pages/AuthorityRolePage";

export default class DrawerNavigator extends Component{
    render(){
        return(
            <AppContainerNavigator/>
        )
    }
}

const AppDrawerNavigator = createDrawerNavigator({
    Home: {screen: HomePage},
    AuthorityUser: {screen: AuthorityUserPage},
    AuthorityRole: {screen: AuthorityRolePage},
    Client: {screen: ClientPage},
    Product: {screen: ProductPage},
    Principle: {screen: PrinciplePage},
    Pipeline: {screen: PipelinePage},
    LeadProject: {screen: LeadProjectPage},
    SalesAgenda: {screen: SalesAgendaPage},
    FileManagement: {screen: FileManegementPage},
    ContactBook: {screen: ContactBookPage},
    LogActivity: {screen: LogActivityPage}
},{
    initialRouteName: 'Home',
    drawerWidth : 304,
    drawerPosition : 'left',
    drawerBackgroundColor : '#474B4F',
    drawerType : 'front',
    contentOptions : {
        activeTintColor : '#86C232',
        activeBackgroundColor : '#6B6E70',
        inactiveTintColor : '#61892F',
        inactiveBackgroundColor : '#474B4F',
    }
})

const AppContainerNavigator = createAppContainer(AppDrawerNavigator);