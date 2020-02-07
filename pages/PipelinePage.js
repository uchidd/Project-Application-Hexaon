import React, { Component } from "react";
import { Animated, View, StyleSheet, ScrollView, TouchableOpacity, LayoutAnimation, FlatList } from "react-native";
import Header from "../components/header";
import { DrawerActions } from 'react-navigation-drawer';
import CardPipeline from '../components/cardPipeline'
import Icon from "react-native-vector-icons/FontAwesome5";
import HeaderSearchWithButton from "../components/headerSearchWithButton";

export default class PipelinePage extends Component{

  static navigationOptions = {
    drawerLabel: 'Pipeline',
    drawerIcon: () => (
      <Icon name={"tasks"} color={"#86C232"} size={19}/>
    ),
  }

  constructor(props) {
    super(props);
    this.arrayHolder = [
      {
        id: 1,
        name: "Registered",
        description: "Status Registered",
        activitydate: "&#x2713;",
        remark: '&#x2713;'
      },
      {
        id: 2,
        name: "Cold Call",
        description: "Status Cold Call",
        activitydate: "&#x2713;",
        remark: "&#x2713;"
      },
      {
        id: 3,
        name: "Visit",
        description: "Status Visit",
        activitydate: "&#x2713;",
        remark: "&#x2713;"
      },
      {
        id: 4,
        name: "Informal Meeting",
        description: "Status Informal Meeting",
        activitydate: "&#x2713;",
        remark: "&#x2713;"
      },
      {
        id: 5,
        name: "Formal Meeting",
        description: "Status Formal Meeting",
        activitydate: "&#x2713;",
        remark: "&#x2713;"
      },
      {
        id: 6,
        name: "RFI",
        description: "Status RFI",
        activitydate: "&#x2713;",
        remark: "&#x2713;"
      },
      {
        id: 7,
        name: "RFP",
        description: "Status RFP",
        activitydate: "&#x2713;",
        remark: "&#x2713;"
      },
      {
        id: 8,
        name: "Join Lelang",
        description: "Status Join Lelang",
        activitydate: "&#x2713;",
        remark: "&#x2713;"
      },
      {
        id: 9,
        name: "Daftar Lelang",
        description: "Status Daftar Lelang",
        activitydate: "&#x2713;",
        remark: "&#x2713;"
      },
      {
        id: 10,
        name: "Pra-Kualifikasi",
        description: "Status Pra-Kualifikasi",
        activitydate: "&#x2713;",
        remark: "&#x2713;"
      },
    ];
    this.state = {
      searchview: false,
      headerview: true,
      isLoading: true,
      text: "",
      searchData: this.arrayHolder,
      dataSource: this.arrayHolder,
      isActionButtonVisible: true
    };
    this._listViewOffset = 0;
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

  state = {
    isActionButtonVisible: true
  }
  _listViewOffset = 0

  _onScroll = (event) => {
    const isBottomBounce =
      event.nativeEvent.layoutMeasurement.height -
        event.nativeEvent.contentSize.height +
        event.nativeEvent.contentOffset.y >=0;
    const CustomLayoutLinear = {
      duration: 100,
      create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
      update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
      delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity }
    }
    const currentOffset = event.nativeEvent.contentOffset.y
    let direction = currentOffset > 0 && currentOffset > this._listViewOffset ? 'down' : 'up';
    const isActionButtonVisible = direction === 'up'
    if (isActionButtonVisible !== this.state.isActionButtonVisible) {
      LayoutAnimation.configureNext(CustomLayoutLinear)
      this.setState({ isActionButtonVisible })
    }
    if (direction === 'up' && isBottomBounce) {
      direction = 'down';
    }
    this._listViewOffset = currentOffset
  }

  render(){
    return(
      <View style={styles.container}>
        {this.state.headerview ? (
          <Header
            title={"Pipeline"}
            pressIconBars={() =>
              this.props.navigation.dispatch(DrawerActions.openDrawer())
            }
            pressIconSearch={() => this._showSearch()}
            iconSearchColor={"#86C232"}
          />
        ) : null}

        {this.state.searchview ? (
          <HeaderSearchWithButton
            pressIconBack={() => this._showHeader()}
            ocText={text => this.setState({ text })}
            searchFunction={() => this._buttonSearch()}
          />
        ) : null}

        <ScrollView
        onScroll={this._onScroll}
        >
          <FlatList
          style={{marginTop: 3, marginBottom: 3}}
            data={this.arrayHolder.sort(function(a, b){return a-b})}
            renderItem={({ item }) => (
              <CardPipeline
                id={item.id}
                name={item.name}
                desc={item.description}
                activitydate={item.activitydate}
                remark={item.remark}
              />
            )}
            enableEmptySections={true}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>

        {this.state.isActionButtonVisible ?<TouchableOpacity
          activeOpacity={0.5}
          onPress={this.SampleFunction}
          style={styles.TouchableOpacityStyle}
        >
          <Animated.View style={styles.fabCircle}>
            <Icon name={"plus"} color={"#86C232"} size={24} />
          </Animated.View>
        </TouchableOpacity> : null}

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#6B6E70'
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
})