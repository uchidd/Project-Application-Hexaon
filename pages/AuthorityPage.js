import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/header";
import { DrawerActions } from 'react-navigation-drawer';
import TabBarNavigator from "../navigation/TabBarNavigator";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class AuthorityPage extends Component{

  static navigationOptions = {
    drawerLabel: 'Authority',
    drawerIcon: () => (
      <Icon name={"users-cog"} color={"#8ECCCC"} size={19}/>
    ),
  }

  render(){
    return(
      <View style={styles.container}>
        <Header title={'Authority'} pressIconBars={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
        <TabBarNavigator></TabBarNavigator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container : {
        flex: 2,
        backgroundColor: '#fff',
    }
})