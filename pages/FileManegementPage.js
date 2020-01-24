import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/header";
import { DrawerActions } from 'react-navigation-drawer';

export default class FileManegementPage extends Component{

  static navigationOptions = {
    drawerLabel: 'File Manegement',
}

  render(){
    return(
      <View style={styles.container}>
        <Header title={'File Manegement'} pressIconBars={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
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