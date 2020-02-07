import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/header';
import HeaderSearchWithButton from '../components/headerSearchWithButton';
import Icon from "react-native-vector-icons/FontAwesome5";


export default class AuthorityUserPage extends Component{
  static navigationOptions = {
    drawerLabel: "Authority (User)",
    drawerIcon: () => <Icon name={"address-book"} color={"#86C232"} size={19} />
  };

  constructor(props) {
    super(props);
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

  render(){
    return(
      <View style={styles.container}>
        {this.state.headerview ? (
          <Header
            title={"Client"}
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
          
        </ScrollView>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.SampleFunction}
          style={styles.TouchableOpacityStyle}
        >
          <View style={styles.fabCircle}>
            <Icon name={"plus"} color={"#8ECCCC"} size={24} />
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#3A4042'
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
      backgroundColor: "#212121",
      resizeMode: "contain",
      width: 56,
      height: 56,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      elevation: 9,
    }
})