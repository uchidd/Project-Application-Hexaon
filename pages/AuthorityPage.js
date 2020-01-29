import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/header";
import { DrawerActions } from 'react-navigation-drawer';
import TabBarNavigator from "../navigation/TabBarNavigator";

export default class AuthorityPage extends Component{

  static navigationOptions = {
    drawerLabel: 'Authority',
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