import React, { Component } from "react";
import { View, StyleSheet, StatusBar, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class HeaderSearchWithButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <View style={styles.headerIconBars}>
            <Icon
              style={styles.icon}
              name={"chevron-left"}
              color={"#FFFFFF"}
              size={24}
              onPress={this.props.pressIconBack}
            />
          </View>
          <View style={styles.mainView}>
            <View style={styles.headerSearchView}>
              <TextInput
                style={styles.input}
                onChangeText={this.props.ocText}
                placeholder={"Search"}
                placeholderTextColor={"#2A4580"}
                underlineColorAndroid={"transparent"}
              />
              <View style={styles.iconSearchView}>
                <Icon
                  name={"search"}
                  color={"#2A4580"}
                  size={20}
                  onPress={this.props.searchFunction}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#2A4580",
    height: 56
  },
  headerIconBars: {
    backgroundColor: "transparent",
    height: 56,
    width: 56
  },
  mainView: {
    flex: 1,
    justifyContent: "center",
    height: 56,
    backgroundColor: "transparent"
  },
  icon: {
    margin: 16
  },
  headerSearchView: {
    height: 40,
    marginTop: 8,
    marginRight: 8,
    marginBottom: 8,
    flexDirection: "row",
    backgroundColor: "#8ECCCC",
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#FFFFFF"
  },
  input: {
    borderWidth: 0,
    borderRadius: 3,
    borderColor: "#2A4580",
    // borderRightWidth: 2,
    paddingLeft: 8,
    paddingRight: 8,
    color: "#2A4580",
    fontSize: 20,
    flex: 1,
    backgroundColor: "#D3D3D3"
  },
  iconSearchView: {
    width: 40,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center"
  },
});