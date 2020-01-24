import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import UserPage from '../pages/UserPage';
import RolePage from '../pages/RolePage';

export default class TabBarNavigator extends Component {
    render() {
        return(     
          <AppContainer/>
        )
    }
}

const AppTopTab = createMaterialTopTabNavigator({
    User : UserPage,
    Role : RolePage
},{
    initialRouteName: 'User',
    tabBarOptions : {
      activeTintColor : '#8ECCCC',
      inactiveTintColor : '#50717B',
      pressColor : '#352F44',
      style : {
        backgroundColor : '#212121',
        elevation : 10
      },
      indicatorStyle : {
        backgroundColor : '#8ECCCC'
      },
    },
    tabBarPosition : 'bottom'
  });

const AppContainer = createAppContainer(AppTopTab);