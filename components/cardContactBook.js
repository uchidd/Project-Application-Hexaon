import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  Modal
} from "react-native";
import ModalViewData from "./modalVIewData";
import ModalOptionAction from "./modalOptionAction";
import ModalEditData from "./modalEditData";
import ModalAlertDialog from "./modalAlertDialog";

export default class CardContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalViewDataVisible: false,
      isModalOptionActionVisible: false,
      isModalEditDataVisible: false,
      isModalAlertDialogVisible: false,
      id: this.props.idText,
      name: this.props.nameText,
      division: this.props.divisionText,
      phone: this.props.phoneText,
      email: this.props.emailText
    };
  }

  _showModalViewData() {
    this.setState({ isModalViewDataVisible: true });
  }

  _hideModalViewData() {
    this.setState({ isModalViewDataVisible: false });
  }

  _showModalOptionAction() {
    this.setState({ isModalOptionActionVisible: true });
  }

  _hideModalOptionAction() {
    this.setState({ isModalOptionActionVisible: false });
  }

  _hideModalOptionActionAndShowModalEditData() {
    this.setState({ isModalOptionActionVisible: false });
    this.setState({ isModalEditDataVisible: true });
  }

  _hideModalEditDataAndModalOptionAction() {
    this.setState({ isModalEditDataVisible: false });
    this.setState({ isModalOptionActionVisible: true });
  }

  _hideModalOptionActionAndShowModalAlertDialog() {
    this.setState({ isModalOptionActionVisible: false });
    this.setState({ isModalAlertDialogVisible: true });
  }

  _hideModalAlertDialogAndModalOptionAction() {
    this.setState({ isModalAlertDialogVisible: false });
    this.setState({ isModalOptionActionVisible: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <TouchableOpacity
          style={styles.firstLayer}
          onPress={() => this._showModalViewData()}
          onLongPress={() => this._showModalOptionAction()}
        >
          <View style={styles.firstSecondLayer}>
            <Text style={styles.idNumber}>{this.state.id}</Text>
          </View>
          <View style={styles.secondSecondLayer}>
            <View style={styles.firstSecondSecondLayer}>
              <View style={styles.leftTextView}>
                <Text style={styles.text}>Name</Text>
              </View>
              <View style={styles.rightTextView}>
                <Text style={styles.text}>Example Name</Text>
              </View>
            </View>
            <View style={styles.secondSecondSecondLayer}>
              <View style={styles.leftTextView}>
                <Text style={styles.text}>Client</Text>
              </View>
              <View style={styles.rightTextView}>
                <Text style={styles.text}>Example Client</Text>
              </View>
            </View>
            <View style={styles.thirdSecondSecondLayer}>
              <View style={styles.leftTextView}>
                <Text style={styles.text}>Division</Text>
              </View>
              <View style={styles.rightTextView}>
                <Text style={styles.text}>Example Division</Text>
              </View>
            </View>
            <View style={styles.fourthSecondSecondLayer}>
              <View style={styles.leftTextView}>
                <Text style={styles.text}>Contact</Text>
              </View>
              <View style={styles.rightTextView}>
                <Text style={styles.text}>Example Contact</Text>
              </View>
            </View>
            <View style={styles.fifthSecondSecondLayer}>
              <View style={styles.leftTextView}>
                <Text style={styles.text}>Email Person</Text>
              </View>
              <View style={styles.rightTextView}>
                <Text style={styles.text}>Example Email Person</Text>
              </View>
            </View>
            <View style={styles.sixthSecondSecondLayer}>
              <View style={styles.leftTextView}>
                <Text style={styles.text}>Email Company</Text>
              </View>
              <View style={styles.rightTextView}>
                <Text style={styles.text}>Example Email Company</Text>
              </View>
            </View>
          </View>

        </TouchableOpacity>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.isModalViewDataVisible}
          onRequestClose={() => this._hideModalViewData()}
        >
          <ModalViewData
            hideModalViewData={() => this._hideModalViewData()}
            idModal={this.state.id}
            nameModal={this.state.name}
            divisionModal={this.state.division}
            phoneModal={this.state.phone}
            emailModal={this.state.email}
          />
        </Modal>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.isModalOptionActionVisible}
          onRequestClose={() => this._hideModalOptionAction()}
        >
          <ModalOptionAction
            hideModalOptionAction={() => this._hideModalOptionAction()}
            showModalEditData={() =>
              this._hideModalOptionActionAndShowModalEditData()
            }
            showModalAlertDialog={() =>
              this._hideModalOptionActionAndShowModalAlertDialog()
            }
          />
        </Modal>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.isModalEditDataVisible}
          onRequestClose={() => this._hideModalEditDataAndModalOptionAction()}
        >
          <ModalEditData
            idModal={this.state.id}
            nameModal={this.state.name}
            divisionModal={this.state.division}
            phoneModal={this.state.phone}
            emailModal={this.state.email}
            hideModalEditData={() =>
              this._hideModalEditDataAndModalOptionAction()
            }
          />
        </Modal>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.isModalAlertDialogVisible}
          onRequestClose={() =>
            this._hideModalAlertDialogAndModalOptionAction()
          }
        >
          <ModalAlertDialog
            hideModalAlertDialog={() =>
              this._hideModalAlertDialogAndModalOptionAction()
            }
          />
        </Modal>
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
    height: 250,
    backgroundColor: "#212121",
    borderWidth: 2,
    borderColor: "#8ECCCC",
    borderRadius: 3,
    //flexDirection: "row",
    flexDirection: "column",
    elevation: 3
  },
  secondLeftLayer: {
    marginTop: 6,
    marginBottom: 6,
    backgroundColor: "#212121",
    flex: 1,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  secondRightLayer: {
    marginTop: 6,
    marginRight: 6,
    marginBottom: 6,
    backgroundColor: "#3A4042",
    flex: 6,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#8ECCCC",
    flexDirection: "row"
  },
  idNumber: {
    flex: 1,
    fontSize: 24,
    color: "#8ECCCC",
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  thirdLeftLayer: {
    marginTop: 6,
    marginLeft: 12,
    marginBottom: 6,
    flex: 4,
    backgroundColor: "#3A4042",
    flexDirection: "column",
    justifyContent: "center"
  },
  thirdCenterLayer: {
    marginTop: 6,
    marginBottom: 6,
    flex: 2,
    backgroundColor: "#3A4042",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  thirdRightLayer: {
    marginTop: 6,
    marginRight: 6,
    marginBottom: 6,
    flex: 14,
    backgroundColor: "#3A4042",
    flexDirection: "column",
    justifyContent: "center"
  },
  text: {
    fontSize: 16,
    color: "#8ECCCC"
  },
  textColon: {
    fontSize: 16,
    color: "#8ECCCC",
    fontWeight: "bold"
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
  fifthSecondSecondLayer: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row"
  },
  sixthSecondSecondLayer: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row"
  },
  leftTextView: {
    backgroundColor: "transparent",
    flex: 7,
    justifyContent: "center",
    paddingLeft: 8
  },
  rightTextView: {
    backgroundColor: "transparent",
    flex: 12,
    justifyContent: "center"
  },
  text: {
    color: "#8ECCCC",
    fontSize: 16
  },
});
