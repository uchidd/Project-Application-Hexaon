import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Text
} from "react-native";

export default class ModalViewData extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <TouchableOpacity style={styles.firstLayer} disabled={true}>
          <View style={styles.firstSecondLayer}>
            <Text style={styles.textID}>{this.props.idModal}</Text>
          </View>
          <View style={styles.secondSecondLayer}>
            <View style={styles.firstSecondSecondLayer}>
              <View style={styles.leftTextView}>
                <Text style={styles.text}>Name</Text>
              </View>
              <View style={styles.semicolonTextView}>
                <Text style={styles.semicolonText}>:</Text>
              </View>
              <View style={styles.rightTextView}>
                <Text style={styles.text}>{this.props.nameModal}</Text>
              </View>
            </View>
            <View style={styles.secondSecondSecondLayer}>
              <View style={styles.leftTextView}>
                <Text style={styles.text}>Division</Text>
              </View>
              <View style={styles.semicolonTextView}>
                <Text style={styles.semicolonText}>:</Text>
              </View>
              <View style={styles.rightTextView}>
                <Text style={styles.text}>{this.props.divisionModal}</Text>
              </View>
            </View>
            <View style={styles.thirdSecondSecondLayer}>
              <View style={styles.leftTextView}>
                <Text style={styles.text}>Phone</Text>
              </View>
              <View style={styles.semicolonTextView}>
                <Text style={styles.semicolonText}>:</Text>
              </View>
              <View style={styles.rightTextView}>
                <Text style={styles.text}>{this.props.phoneModal}</Text>
              </View>
            </View>
            <View style={styles.fourthSecondSecondLayer}>
              <View style={styles.leftTextView}>
                <Text style={styles.text}>Email</Text>
              </View>
              <View style={styles.semicolonTextView}>
                <Text style={styles.semicolonText}>:</Text>
              </View>
              <View style={styles.rightTextView}>
                <Text style={styles.text}>{this.props.emailModal}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.thirdSecondLayer}
            onPress={this.props.hideModalViewData}
          >
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(33, 33, 33, 0.7)",
    flex: 1,
    justifyContent: "center"
  },
  firstLayer: {
    backgroundColor: "#212121",
    margin: 6,
    height: 235,
    borderColor: "#8ECCCC",
    borderWidth: 2,
    borderRadius: 3,
    flexDirection: "column"
  },
  firstSecondLayer: {
    backgroundColor: "transparent",
    height: 52,
    justifyContent: "center",
    alignItems: "center"
  },
  secondSecondLayer: {
    backgroundColor: "#3A4042",
    height: 132,
    marginLeft: 6,
    marginRight: 6,
    borderColor: "#8ECCCC",
    borderRadius: 3,
    borderWidth: 2,
    flexDirection: "column"
  },
  thirdSecondLayer: {
    backgroundColor: "#3A4042",
    flex: 1,
    margin: 6,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#8ECCCC",
    justifyContent: "center",
    alignItems: "center"
  },
  textID: {
    fontSize: 24,
    color: "#8ECCCC",
    fontWeight: "bold"
  },
  firstSecondSecondLayer: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row"
  },
  secondSecondSecondLayer: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row"
  },
  thirdSecondSecondLayer: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row"
  },
  fourthSecondSecondLayer: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row"
  },
  leftTextView: {
    backgroundColor: "transparent",
    flex: 4,
    justifyContent: "center",
    paddingLeft: 8
  },
  semicolonTextView: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  rightTextView: {
    backgroundColor: "transparent",
    flex: 15,
    justifyContent: "center"
  },
  text: {
    color: "#8ECCCC",
    fontSize: 16
  },
  semicolonText: {
    fontSize: 16,
    color: "#8ECCCC",
    fontWeight: "bold"
  },
  closeText: {
    color: "#8ECCCC",
    fontSize: 20
  }
});
