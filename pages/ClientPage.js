import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/header";
import { DrawerActions } from 'react-navigation-drawer';
import Icon from "react-native-vector-icons/FontAwesome5";

export default class ClientPage extends Component{

  static navigationOptions = {
    drawerLabel: 'Client',
    drawerIcon: () => (
      <Icon name={"users"} color={"#8ECCCC"} size={19}/>
    ),
  }

  render(){
    return(
      <View style={styles.container}>
        <Header title={'Client'} pressIconBars={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
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