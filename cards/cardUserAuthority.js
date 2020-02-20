import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  Modal
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import ModalOptionAction from "../modal/modalOptionAction";
import ModalAlertDialog from "../modal/modalAlertDialog";
import ModalDetailAuthorityUser from "../modal_details/modalDetailAuthorityUser";
import ModalEditUserAuthority from "../modal_edit/modalEditUserAuthority";

export default class CardUserAuthority extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalViewDataVisible: false,
      isModalOptionActionVisible: false,
      isModalEditDataVisible: false,
      isModalAlertDialogVisible: false
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
        >
          <View style={styles.nameView}>
            <Text numberOfLines={1} style={styles.nameText}>
              {this.props.name} ({this.props.nik})
            </Text>
          </View>
          <View style={styles.iconView}>
            <Icon
              name={"ellipsis-v"}
              color={"#2A4580"}
              size={20}
              onPress={() => this._showModalOptionAction()}
            />
          </View>
        </TouchableOpacity>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.isModalViewDataVisible}
          onRequestClose={() => this._hideModalViewData()}
        >
          <ModalDetailAuthorityUser
            hideModalViewData={() => this._hideModalViewData()}
            idModal={this.props.id}
            nikModal={this.props.nik}
            nameModal={this.props.name}
            emailModal={this.props.email}
            phoneModal={this.props.phone}
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
            showModalEdit={() =>
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
          <ModalEditUserAuthority
            idModal={this.props.id}
            nikModal={this.props.nik}
            nameModal={this.props.name}
            emailModal={this.props.email}
            phoneModal={this.props.phone}
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
    marginHorizontal: 6,
    marginVertical: 3,
    height: 56,
    backgroundColor: "#FFFFFF",
    borderRadius: 3,
    flexDirection: "row"
  },
  nameView: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center"
  },
  iconView: {
    backgroundColor: "transparent",
    width: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  nameText: {
    fontSize: 20,
    color: "#2A4580",
    marginLeft: 16
  }
});
