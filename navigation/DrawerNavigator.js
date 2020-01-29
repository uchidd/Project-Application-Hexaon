import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ProductPage from '../pages/ProductPage';
import ClientPage from '../pages/ClientPage';
import ContactBookPage from '../pages/ContactBookPage';
import AuthorityPage from '../pages/AuthorityPage';
import PrinciplePage from '../pages/PrinciplePage';
import PipelinePage from '../pages/PipelinePage';
import LeadProjectPage from '../pages/LeadProjectPage';
import SalesAgendaPage from '../pages/SalesAgendaPage';
import FileManegementPage from '../pages/FileManegementPage';
import LogActivityPage from '../pages/LogActivityPage';
import HomePage from '../pages/HomePageKaTaren';

export default class DrawerNavigator extends Component{
    render(){
        return(
            <AppContainerNavigator/>
        )
    }
}

const AppDrawerNavigator = createDrawerNavigator({
    Home: {screen: HomePage},
    Authority: {screen: AuthorityPage},
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
    drawerBackgroundColor : '#212121',
    drawerType : 'back',
    contentOptions : {
        activeTintColor : '#8ECCCC',
        activeBackgroundColor : '#3A4042',
        inactiveTintColor : '#50717B',
        inactiveBackgroundColor : '#212121',
    }
})

const AppContainerNavigator = createAppContainer(AppDrawerNavigator);