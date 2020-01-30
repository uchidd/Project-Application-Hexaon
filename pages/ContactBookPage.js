import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/header";
import { DrawerActions } from "react-navigation-drawer";
import CardContact from "../components/cardContactBook";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import HeaderSearch from "../components/headerSearch";
import HeaderSearchWithButton from "../components/headerSearchWithButton";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class ContactBookPage extends Component {
  static navigationOptions = {
    drawerLabel: 'Contact Book',
    drawerIcon: () => (
      <Icon name={"address-book"} color={"#86C232"} size={19}/>
    ),
  }

  constructor(props) {
    super(props);

    this.arrayHolder = [
      {
        id: "1",
        name: "Lajala",
        division: "Example 1",
        phone: "Example 1",
        email: "example1@example.com"
      },
      {
        id: "2",
        name: "Kamaki",
        division: "Example 2",
        phone: "Example 2",
        email: "example2@example.com"
      },
      {
        id: "3",
        name: "Namana",
        division: "Example 3",
        phone: "Example 3",
        email: "example3@example.com"
      },
      {
        id: "4",
        name: "Makama",
        division: "Example 4",
        phone: "Example 4",
        email: "example4@example.com"
      },
      {
        id: "5",
        name: "Zazaza",
        division: "Example 5",
        phone: "Example 5",
        email: "example5@example.com"
      },
      {
        id: "6",
        name: "Gazaga",
        division: "Example 6",
        phone: "Example 6",
        email: "example6@example.com"
      },
      {
        id: "7",
        name: "Jalaja",
        division: "Example 7",
        phone: "Example 7",
        email: "example7@example.com"
      },
      {
        id: "8",
        name: "Yazala",
        division: "Example 8",
        phone: "Example 8",
        email: "example8@example.com"
      },
      {
        id: "9",
        name: "Kanala",
        division: "Example 9",
        phone: "Example 9",
        email: "example9@example.com"
      },
      {
        id: "10",
        name: "Halaka",
        division: "Example 10",
        phone: "Example 10",
        email: "example9@example.com"
      },
      {
        id: "11",
        name: "Takana",
        division: "Example 11",
        phone: "Example 11",
        email: "example19@example.com"
      }
    ];
    this.state = {
      searchview: false,
      headerview: true,
      isLoading: true,
      text: "",
      searchData: this.arrayHolder,
      dataSource: this.arrayHolder
    };
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

  // _searchFilterFunction(text){
  //   const newData = this.arrayHolder.filter(function(item) {
  //     const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
  //     const textData = text.toUpperCase();
  //     return itemData.indexOf(textData) > -1;
  //   });
  //   this.setState({
  //     dataSource: newData,
  //     text: text
  //   })
  // }

  _buttonSearch = () => {
    console.log(this.state.dataSource);
    console.log(this.state.searchData);
    const { text } = this.state;
    const newData = this.state.searchData.filter(item => {
      //test
      const itemData = "${item.name.toUpperCase()}";
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      dataSource: newData
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.headerview ? (
          <Header
            title={"Contact Book"}
            pressIconBars={() =>
              this.props.navigation.dispatch(DrawerActions.openDrawer())
            }
            pressIconSearch={() => this._showSearch()}
          />
        ) : null}

        {this.state.searchview ? (
          <HeaderSearchWithButton
            pressIconBack={() => this._showHeader()}
            ocText={text => this.setState({ text })}
            searchFunction={() => this._buttonSearch()}
          />
        ) : null}

        <ScrollView>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <CardContact
                idText={item.id}
                nameText={item.name}
                divisionText={item.division}
                phoneText={item.phone}
                emailText={item.email}
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
            <Icon name={"plus"} color={"#86C232"} size={24} />
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B6E70"
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
    backgroundColor: "#222629",
    resizeMode: "contain",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 9,
  }
});
