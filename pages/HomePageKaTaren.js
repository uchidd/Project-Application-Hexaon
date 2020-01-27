import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Header from "../components/header";
import { DrawerActions } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import ImageSlider from 'react-native-image-slider';



export default class HomePage extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title={"Home"}pressIconBars={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
        <View style={styles.mainView}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3A4042",
    flexDirection: "column"
  },
  mainView: {
    backgroundColor: "#3A4042",
    flex: 1,
    flexDirection: "column",
    padding: 3
  },
});
