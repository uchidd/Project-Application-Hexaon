import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/header";
import { DrawerActions } from 'react-navigation-drawer';

export default class SalesAgendaPage extends Component{

  static navigationOptions = {
    drawerLabel: 'Sales Agenda',
}

  render(){
    return(
      <View style={styles.container}>
        <Header title={'Sales Agenda'} pressIconBars={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff'
    }
})