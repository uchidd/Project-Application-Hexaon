// Done

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  FlatList
} from "react-native";
import Header from "../headers/header";
import { DrawerActions } from "react-navigation-drawer";
import CardPrinciple from "../cards/cardPrinciple";
import Icon from "react-native-vector-icons/FontAwesome5";
import HeaderSearch from "../headers/headerSearch";

export default class PrinciplePage extends Component {
  static navigationOptions = {
    drawerLabel: "Principle",
    drawerIcon: () => <Icon name={"user-tie"} color={"#2A4580"} size={19} solid={true} />
  };

  constructor(props) {
    super(props);
    this.state = {
      searchview: false,
      headerview: true,
      isLoading: true,
      text: "",
      dataSource: [],
      isActionButtonVisible: true
    };
    this._listViewOffset = 0;
  }

  componentDidMount() {
    return fetch("http://sales.hexaon.id/api/getOption", { method: "POST" })
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.principles
          },
          function () { }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  _showSearch() {
    this.setState({ searchview: true });
    this.setState({ headerview: false });
  }

  _showHeader() {
    this.setState({ searchview: false });
    this.setState({ headerview: true });
    this.setState({ text: "" });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.headerview ? (
          <Header
            title={"Principle"}
            pressIconBars={() =>
              this.props.navigation.dispatch(DrawerActions.openDrawer())
            }
            pressIconSearch={() => this._showSearch()}
            iconSearchColor={"#FFFFFF"}
          />
        ) : null}

        {this.state.searchview ? (
          <HeaderSearch
            pressIconBack={() => this._showHeader()}
            ocText={text => this.setState({ text })}
            searchFunction={() => this._buttonSearch()}
          />
        ) : null}

        <ScrollView>
          <FlatList
            style={{ marginTop: 3, marginBottom: 3 }}
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <CardPrinciple
                id={item.id}
                name={item.name}
                email={item.email}
                phone={item.phone}
                address={item.address}
                pic_name={item.pic_name}
                pic_contact={item.pic_contact}
              />
            )}
            enableEmptySections={true}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.SampleFunction}
          style={styles.TouchableOpacityStyle}
        >
          <View style={styles.fabCircle}>
            <Icon name={"plus"} color={"#FFFFFF"} size={24} />
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3"
  },
  TouchableOpacityStyle: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 16,
    bottom: 16
  },

  fabCircle: {
    backgroundColor: "#2A4580",
    resizeMode: "contain",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 9
  }
});