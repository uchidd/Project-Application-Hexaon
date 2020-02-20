// Done

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated
} from "react-native";
import Header from "../headers/header";
import { DrawerActions } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";

export default class HomePage extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: () => <Icon name={"home"} color={"#2A4580"} size={19} solid={true} />
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
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("AuthorityUser")}
            >
              <View style={styles.iconView}>
                <Icon name={"user-cog"} color={"#2A4580"} size={40} solid={true} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Authority User</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("AuthorityRole")}
            >
              <View style={styles.iconView}>
                <Icon name={"users-cog"} color={"#2A4580"} size={40} solid={true} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Authority Role</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Client")}
            >
              <View style={styles.iconView}>
                <Icon name={"users"} color={"#2A4580"} size={40} solid={true} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Client</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Product")}
            >
              <View style={styles.iconView}>
                <Icon name={"box"} color={"#2A4580"} size={40} solid={true} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Product</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Principle")}
            >
              <View style={styles.iconView}>
                <Icon name={"user-tie"} color={"#2A4580"} size={40} solid={true} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Principle</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Pipeline")}
            >
              <View style={styles.iconView}>
                <Icon name={"tasks"} color={"#2A4580"} size={40} solid={true} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Pipeline</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("LeadProject")}
            >
              <View style={styles.iconView}>
                <Icon name={"file-upload"} color={"#2A4580"} size={40} solid={true} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Lead Project</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("SalesAgenda")}
            >
              <View style={styles.iconView}>
                <Icon
                  name={"calendar-alt"}
                  color={"#2A4580"}
                  size={40}
                  solid={true}
                />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Sales Agenda</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("FileManagement")}
            >
              <View style={styles.iconView}>
                <Icon name={"file"} color={"#2A4580"} size={40} solid={true} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>File Management</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("FolderManagement")}
            >
              <View style={styles.iconView}>
                <Icon name={"folder-open"} color={"#2A4580"} size={40} solid={true} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Folder Management</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("ContactBook")}
            >
              <View style={styles.iconView}>
                <Icon name={"address-book"} color={"#2A4580"} size={40} solid={true} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Contact Book</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("LogSignActivity")}
            >
              <View style={styles.iconView}>
                <Icon name={"history"} color={"#2A4580"} size={40} solid={true} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Sign Activity</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("LogUsersActivity")}
            >
              <View style={styles.iconView}>
                <Icon name={"user-clock"} color={"#2A4580"} size={40} solid={true} />
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

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
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
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    margin: 3,
    padding: 3,
    borderRadius: 5,
    flex: 1
  },
  iconView: {
    backgroundColor: "transparent",
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  titleView: {
    backgroundColor: "transparent",
    flex: 1,
    margin: 3,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    color: "#2A4580",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold"
  }
});