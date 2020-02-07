import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  Modal
} from "react-native";

export default class CardClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isModalViewDataVisible: false,
      // isModalOptionActionVisible: false,
      // isModalEditDataVisible: false,
      // isModalAlertDialogVisible: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <TouchableOpacity
          style={styles.firstLayer}>

          <View style={styles.titleView}>
            <Text style={styles.textTitle}>{this.props.id}</Text>
          </View>
          <View style={styles.infoView}>
            <View style={styles.leftInfoView}>
              <View style={styles.topRowLeft}>
                <Text style={styles.textInfo}>Name</Text>
              </View>
              <View style={styles.midRowLeft}>
                <Text style={styles.textInfo}>Contact</Text>
              </View>
              <View style={styles.midRowLeft}>
                <Text style={styles.textInfo}>Addres</Text>
              </View>
              <View style={styles.midRowLeft}>
                <Text style={styles.textInfo}>Pic Name</Text>
              </View>
              <View style={styles.botRowLeft}>
                <Text style={styles.textInfo}>Pic Contact</Text>
              </View>
            </View>
            <View style={styles.rightInfoView}>
              <View style={styles.topRowRight}>
                <Text style={styles.textInfo}>{this.props.name}</Text>
              </View>
              <View style={styles.midRowRight}>
                <Text style={styles.textInfo}>{this.props.contact}</Text>
              </View>
              <View style={styles.midRowRight}>
                <Text style={styles.textInfo}>{this.props.address}</Text>
              </View>
              <View style={styles.midRowRight}>
                <Text style={styles.textInfo}>{this.props.picname}</Text>
              </View>
              <View style={styles.botRowRight}>
                <Text style={styles.textInfo}>{this.props.piccontact}</Text>
              </View>
            </View>
          </View>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  firstLayer: {
    marginHorizontal: 6,
    marginVertical: 3,
    height: 192,
    backgroundColor: "#212121",
    borderWidth: 2,
    borderColor: "#8ECCCC",
    borderRadius: 3,
    //flexDirection: "row",
    flexDirection: "column",
    elevation: 3,
  },
  titleView: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textTitle: {
    fontSize: 24,
    color: "#8ECCCC"
  },
  infoView: {
    backgroundColor: "#3A4042",
    height: 146,
    margin: 3,
    borderWidth: 2,
    borderColor: "#8ECCCC",
    borderRadius: 3,
    flexDirection: "row"
  },
  leftInfoView: {
    backgroundColor: "transparent",
    flex: 2
  },
  rightInfoView: {
    backgroundColor: "transparent",
    flex: 5
  },
  topRowLeft: {
    backgroundColor: "transparent",
    flex: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#8ECCCC",
    justifyContent: "center"
  },
  midRowLeft: {
    backgroundColor: "transparent",
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#8ECCCC",
    justifyContent: "center"
  },
  botRowLeft: {
    backgroundColor: "transparent",
    flex: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: "#8ECCCC",
    justifyContent: "center"
  },
  topRowRight: {
    backgroundColor: "transparent",
    flex: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#8ECCCC",
    justifyContent: "center"
  },
  midRowRight: {
    backgroundColor: "transparent",
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#8ECCCC",
    justifyContent: "center"
  },
  botRowRight: {
    backgroundColor: "transparent",
    flex: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#8ECCCC",
    justifyContent: "center"
  },
  textInfo: {
    marginLeft: 6,
    fontSize: 16,
    color: "#8ECCCC"
  }
});