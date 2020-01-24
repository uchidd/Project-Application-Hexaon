import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/header";
import { DrawerActions } from 'react-navigation-drawer';

export default class LeadProjectPage extends Component{

  static navigationOptions = {
    drawerLabel: 'Lead Project',
}

  render(){
    return(
      <View style={styles.container}>
        <Header title={'Lead Project'} pressIconBars={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
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