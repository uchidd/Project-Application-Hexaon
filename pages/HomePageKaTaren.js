import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Header from "../components/header";
import { DrawerActions } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class HomePage extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={"Home"}
          pressIconBars={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }
        />
        <View style={styles.mainView}>
          <View style={styles.rowView}>
            <TouchableOpacity style={styles.button}>
              <View style={styles.iconView}>
                <Icon name={"users-cog"} color={"#8ECCCC"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Authority</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.iconView}>
                <Icon name={"users"} color={"#8ECCCC"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Client</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowView}>
            <TouchableOpacity style={styles.button}>
              <View style={styles.iconView}>
                <Icon name={"box"} color={"#8ECCCC"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Product</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.iconView}>
                <Icon name={"user-tie"} color={"#8ECCCC"} size={40}/>
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Principle</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowView}>
            <TouchableOpacity style={styles.button}>
              <View style={styles.iconView}>
                <Icon name={"tasks"} color={"#8ECCCC"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Pipeline</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.iconView}>
                <Icon name={"file-upload"} color={"#8ECCCC"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Lead Project</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowView}>
            <TouchableOpacity style={styles.button}>
              <View style={styles.iconView}>
                <Icon name={"calendar-alt"} color={"#8ECCCC"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Sales Agenda</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.iconView}>
                <Icon name={"file"} color={"#8ECCCC"} size={40} solid={true}/>
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>File Management</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowView}>
            <TouchableOpacity style={styles.button}>
              <View style={styles.iconView}>
                <Icon name={"address-book"} color={"#8ECCCC"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Contact Book</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.iconView}>
                <Icon name={"history"} color={"#8ECCCC"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Log Activity</Text>
              </View>
            </TouchableOpacity>
          </View>
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
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "column",
    padding: 3
  },
  rowView: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row"
  },
  button: {
    backgroundColor: "#212121",
    flex: 1,
    flexDirection: "column",
    margin: 3,
    padding: 3,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#8ECCCC"
  },
  iconView: {
    backgroundColor: "transparent",
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  titleView: {
    backgroundColor: "#3A4042",
    flex: 1,
    margin: 3,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#8ECCCC",
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    color: "#8ECCCC",
    fontSize: 20
  }
});
