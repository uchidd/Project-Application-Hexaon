import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import Header from "../headers/header";
import { DrawerActions } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class HomePage extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: () => (
      <Icon name={"home"} color={"#86C232"} size={19}/>
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={"Home"}
          pressIconBars={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }
          iconSearchColor={"transparent"}
        />
        
        <View style={styles.mainView}>
          <View style={styles.rowView}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AuthorityUser')}>
              <View style={styles.iconView}>
                <Icon name={"user-cog"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Authority User</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AuthorityRole')}>
              <View style={styles.iconView}>
                <Icon name={"users-cog"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Authority Role</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Client')}>
              <View style={styles.iconView}>
                <Icon name={"users"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Client</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowView}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Product')}>
              <View style={styles.iconView}>
                <Icon name={"box"} color={"#86C232"} size={40}/>
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Product</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Principle')}>
              <View style={styles.iconView}>
                <Icon name={"user-tie"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Principle</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Pipeline')}>
              <View style={styles.iconView}>
                <Icon name={"tasks"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Pipeline</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowView}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('LeadProject')}>
              <View style={styles.iconView}>
                <Icon name={"file-upload"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Lead Project</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SalesAgenda')}>
              <View style={styles.iconView}>
                <Icon name={"calendar-alt"} color={"#86C232"} size={40} solid={true}/>
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Sales Agenda</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('FileManagement')}>
              <View style={styles.iconView}>
                <Icon name={"file"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>File Management</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowView}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('FolderManagement')}>
              <View style={styles.iconView}>
                <Icon name={"folder-open"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Folder Management</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('ContactBook')}>
              <View style={styles.iconView}>
                <Icon name={"address-book"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Contact Book</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('LogSignActivity')}>
              <View style={styles.iconView}>
                <Icon name={"history"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Sign Activity</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowView}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('LogUsersActivity')}>
              <View style={styles.iconView}>
                <Icon name={"user-clock"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Users Activity</Text>
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
    backgroundColor: "#6B6E70",
    flexDirection: "column"
  },
  mainView: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "column",
    margin: 3,
    padding: 3
  },
  rowView: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    height: 110,
    width: 110,
    backgroundColor: "#222629",
    alignSelf: "center",
    // flex: 1,
    // flexDirection: "column",
    margin: 3,
    padding: 3,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "#86C232"
  },
  iconView: {
    backgroundColor: "transparent",
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  titleView: {
    backgroundColor: "#474B4F",
    flex: 1,
    margin: 3,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#61892F",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: "#86C232",
    fontSize: 12,
    textAlign: "center"
  }
});
