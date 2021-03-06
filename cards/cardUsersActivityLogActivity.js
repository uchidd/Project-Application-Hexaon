import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  Modal
} from "react-native";
// import ModalOptionAction from "./modalOptionAction";
// import ModalEditData from "./modalEditData";
// import ModalAlertDialog from "./modalAlertDialog";

export default class CardUsersActivity extends Component {
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
            <Text style={styles.textTitle}>1</Text>
          </View>
          <View style={styles.infoView}>
            <View style={styles.leftInfoView}>
              <View style={styles.topRowLeft}>
                <Text style={styles.textInfo}>Name</Text>
              </View>
              <View style={styles.midRowLeft}>
                <Text style={styles.textInfo}>Page</Text>
              </View>
              <View style={styles.midRowLeft}>
                <Text style={styles.textInfo}>Activity</Text>
              </View>
              <View style={styles.midRowLeft}>
                <Text style={styles.textInfo}>Date</Text>
              </View>
              <View style={styles.botRowLeft}>
                <Text style={styles.textInfo}>Time</Text>
              </View>
            </View>
            <View style={styles.rightInfoView}>
              <View style={styles.topRowRight}>
                <Text style={styles.textInfo}>Admin</Text>
              </View>
              <View style={styles.midRowRight}>
                <Text style={styles.textInfo}>Client</Text>
              </View>
              <View style={styles.midRowRight}>
                <Text style={styles.textInfo}>Create Client (BTN)</Text>
              </View>
              <View style={styles.midRowRight}>
                <Text style={styles.textInfo}>27-11-2019</Text>
              </View>
              <View style={styles.botRowRight}>
                <Text style={styles.textInfo}>04:16:45 pm</Text>
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
    margin: 6,
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
    flex: 3
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