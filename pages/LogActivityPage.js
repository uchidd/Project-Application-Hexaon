import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/header";
import { DrawerActions } from 'react-navigation-drawer';
import Icon from "react-native-vector-icons/FontAwesome5";

export default class LogActivityPage extends Component{

  static navigationOptions = {
    drawerLabel: 'Log Activity',
    drawerIcon: () => (
      <Icon name={"history"} color={"#8ECCCC"} size={19}/>
    ),
  }

  render(){
    return(
      <View style={styles.container}>
        <Header title={'Log Activity'} pressIconBars={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
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