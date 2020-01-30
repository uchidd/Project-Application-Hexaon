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

          <View style={styles.titleView}>
            <Text style={styles.textTitle}>{this.state.id}</Text>
          </View>
          <View style={styles.infoView}>
            <View style={styles.leftInfoView}>
              <View style={styles.topRowLeft}>
                <Text style={styles.textInfo}>Name</Text>
              </View>
              <View style={styles.midRowLeft}>
                <Text style={styles.textInfo}>Client</Text>
              </View>
              <View style={styles.midRowLeft}>
                <Text style={styles.textInfo}>Division</Text>
              </View>
              <View style={styles.midRowLeft}>
                <Text style={styles.textInfo}>Contact</Text>
              </View>
              <View style={styles.midRowLeft}>
                <Text style={styles.textInfo}>Email Person</Text>
              </View>
              <View style={styles.botRowLeft}>
                <Text style={styles.textInfo}>Email Company</Text>
              </View>
            </View>
            <View style={styles.rightInfoView}>
              <View style={styles.topRowRight}>
                <Text style={styles.textInfo}>{this.state.name}</Text>
              </View>
              <View style={styles.midRowRight}></View>
              <View style={styles.midRowRight}>
                <Text style={styles.textInfo}>{this.state.division}</Text>
              </View>
              <View style={styles.midRowRight}></View>
              <View style={styles.midRowRight}></View>
              <View style={styles.botRowRight}>
                <Text style={styles.textInfo}>{this.state.email}</Text>
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
          presentationStyle={"overFullScreen"}
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
    height: 221,
    backgroundColor: "#222629",
    borderWidth: 2,
    borderColor: "#86C232",
    borderRadius: 3,
    flexDirection: "column",
    elevation: 3,
    padding : 3
  },
  titleView: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textTitle: {
    fontSize: 24,
    color: "#86C232"
  },
  infoView: {
    backgroundColor: "#3A4042",
    height: 175,
    margin: 3,
    borderWidth: 2,
    borderColor: "#61892F",
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
    borderColor: "#61892F",
    justifyContent: "center"
  },
  midRowLeft: {
    backgroundColor: "transparent",
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#61892F",
    justifyContent: "center"
  },
  botRowLeft: {
    backgroundColor: "transparent",
    flex: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: "#61892F",
    justifyContent: "center"
  },
  topRowRight: {
    backgroundColor: "transparent",
    flex: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#61892F",
    justifyContent: "center"
  },
  midRowRight: {
    backgroundColor: "transparent",
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#61892F",
    justifyContent: "center"
  },
  botRowRight: {
    backgroundColor: "transparent",
    flex: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#61892F",
    justifyContent: "center"
  },
  textInfo: {
    marginLeft: 6,
    fontSize: 16,
    color: "#86C232"
  }
});
