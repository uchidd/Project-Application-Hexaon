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
import HomePage from '../pages/HomePageKaTaren';
import AuthorityUserPage from '../pages/AuthorityUserPage';
import AuthorityRolePage from '../pages/AuthorityRolePage';
import FileManagementFilePage from '../pages/FileManagementFilePage'
import FileManagementFolderPage from '../pages/FileManagementFolderPage';
import LogActivitySignActivityPage from '../pages/LogActivitySignActivityPage';
import LogActivityUsersActivityPage from '../pages/LogActivityUsersActivityPage'

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
    FileManagement: {screen: FileManagementFilePage},
    FolderManagement: {screen: FileManagementFolderPage},
    ContactBook: {screen: ContactBookPage},
    LogSignActivity: {screen: LogActivitySignActivityPage},
    LogUsersActivity: {screen: LogActivityUsersActivityPage}
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