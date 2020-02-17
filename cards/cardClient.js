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
import ModalViewData from '../modal_details/modalViewData'
import ModalOptionAction from '../modal/modalOptionAction'
import ModalEditData from '../modal_edit/modalEditData'
import ModalAlertDialog from '../modal/modalAlertDialog'
import ModalDetailClient from '../modal_details/modalDetailClient'

export default class CardClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalViewDataVisible: false,
      isModalOptionActionVisible: false,
      isModalEditDataVisible: false,
      isModalAlertDialogVisible: false,
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
            <Text numberOfLines={1} style={styles.nameText}>{this.props.name}</Text>
          </View>
          <View style={styles.iconView}>
            <Icon name={'ellipsis-v'} color={'#2A4580'} size={20} onPress={() => this._showModalOptionAction()}/>
          </View>
        </TouchableOpacity>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.isModalViewDataVisible}
          onRequestClose={() => this._hideModalViewData()}
        >
          <ModalDetailClient
            hideModalViewData={() => this._hideModalViewData()}
            idModal={this.props.id}
            nameModal={this.props.name}
            emailModal={this.props.email}
            phoneModal={this.props.phone}
            addressModal={this.props.address}
            pic_nameModal={this.props.pic_name}
            pic_contactModal={this.props.pic_contact}
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
    marginHorizontal: 6,
    marginVertical: 3, 
    height: 56,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 3,
    flexDirection: "row",
    // elevation: 9
  },
  nameView: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center"
  },
  iconView:{
    backgroundColor: "transparent",
    width: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  nameText:{
    fontSize: 20,
    color: "#2A4580",
    marginLeft: 16
  }
});