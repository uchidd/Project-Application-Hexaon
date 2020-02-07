import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  Modal
} from "react-native";

export default class CardPipeline extends Component {
  
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
                <Text style={styles.textInfo}>Pipeline Name</Text>
              </View>
              <View style={styles.midRowLeft}>
                <Text style={styles.textInfo}>Description</Text>
              </View>
              <View style={styles.midRowLeft}>
                <Text style={styles.textInfo}>Activity Date</Text>
              </View>
              <View style={styles.botRowLeft}>
                <Text style={styles.textInfo}>Remark</Text>
              </View>
            </View>
            <View style={styles.rightInfoView}>
              <View style={styles.topRowRight}>
                <Text style={styles.textInfo}>{this.props.name}</Text>
              </View>
              <View style={styles.midRowRight}>
                <Text style={styles.textInfo}>{this.props.desc}</Text>
              </View>
              <View style={styles.midRowRight}>
                <Text style={styles.textInfo}>{this.props.activitydate}</Text>
              </View>
              <View style={styles.botRowRight}>
                <Text style={styles.textInfo}>{this.props.remark}</Text>
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
    height: 163,
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
    height: 117,
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
