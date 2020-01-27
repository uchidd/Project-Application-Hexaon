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
          {/* <View style={styles.secondLeftLayer}>
            <Text style={styles.idNumber}>{this.state.id}</Text>
          </View>
          <View style={styles.secondRightLayer}>
            <View style={styles.thirdLeftLayer}>
              <Text style={styles.text}>Name</Text>
              <Text style={styles.text}>Division</Text>
              <Text style={styles.text}>Phone</Text>
              <Text style={styles.text}>Email</Text>
            </View>
            <View style={styles.thirdCenterLayer}>
              <Text style={styles.textColon}>:</Text>
              <Text style={styles.textColon}>:</Text>
              <Text style={styles.textColon}>:</Text>
              <Text style={styles.textColon}>:</Text>
            </View>
            <View style={styles.thirdRightLayer}>
              <Text style={styles.text}>{this.state.name}</Text>
              <Text style={styles.text}>{this.state.division}</Text>
              <Text style={styles.text}>{this.state.phone}</Text>
              <Text style={styles.text}>{this.state.email}</Text>
            </View>
          </View> */}

          <View style={styles.firstSecondLayer}>
            <Text style={styles.idNumber}>{this.state.id}</Text>
          </View>
          <View style={styles.secondSecondLayer}>

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
            showModalEditData={() => this._hideModalOptionActionAndShowModalEditData()}
            showModalAlertDialog={() => this._hideModalOptionActionAndShowModalAlertDialog()}
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
          onRequestClose={() => this._hideModalAlertDialogAndModalOptionAction()}
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
    fontSize: 24,
    color: "#8ECCCC",
    fontWeight: "bold",
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
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
    flex: 1,
    backgroundColor: "transparent",
    height: 52,
    justifyContent: "center",
    alignItems: "center"
  },
  secondSecondLayer: {
    backgroundColor: "#3A4042",
    height: 204,
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 6,
    borderColor: "#8ECCCC",
    borderRadius: 3,
    borderWidth: 2,
    flexDirection: "column"
  },
});
