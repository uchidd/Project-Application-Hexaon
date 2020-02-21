import React, { Component } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Picker, Button } from "react-native";
import Header from "../headers/header";
import { DrawerActions } from 'react-navigation-drawer';
import Icon from "react-native-vector-icons/FontAwesome5";
import HeaderSearchWithButton from "../headers/headerSearchWithButton";
import { TextInput } from "react-native-gesture-handler";
import RNPickerSelect from 'react-native-picker-select';

export default class LeadProjectPage extends Component {

  static navigationOptions = {
    drawerLabel: 'Lead Project',
    drawerIcon: () => (
      <Icon name={"file-upload"} color={"#2A4580"} size={19} solid={true} />
    ),
  }

  constructor(props) {
    super(props);
    this.state = {
      searchview: false,
      headerview: true,
      isLoading: true,
      text: "",
      searchData: this.arrayHolder,
      dataSource: this.arrayHolder,
      PickerSelectedVal: ''
    };
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

  render() {
    return (
      <View style={styles.container}>
        {this.state.headerview ? (
          <Header
            title={"Lead Project"}
            pressIconBars={() =>
              this.props.navigation.dispatch(DrawerActions.openDrawer())
            }
            pressIconSearch={() => this._showSearch()}
            iconSearchColor={"#FFFFFF"}
          />
        ) : null}

        {this.state.searchview ? (
          <HeaderSearchWithButton
            pressIconBack={() => this._showHeader()}
            ocText={text => this.setState({ text })}
            searchFunction={() => this._buttonSearch()}
          />
        ) : null}

        <ScrollView>
          <View style={styles.firstLayer}>
            <View style={styles.secondLayer}>
              <View>
                <Text style={styles.text}>Client</Text>
                <View style={styles.picker}>
                  <RNPickerSelect
                    placeholder={{
                      label: '-- Please choose Client --',
                      value: null,
                      color: '#9EA0A4'
                    }}
                    style={{ height: 40 }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                      { label: 'BPD BANTEN', value: 'BPD BANTEN' },
                      { label: 'BANK COMMONWEALTH', value: 'BANK COMMONWEALTH' },
                      { label: 'BANK DANAMON', value: 'BANK DANAMON' },
                      { label: 'BANK MAYBANK INDONESIA', value: 'BANK MAYBANK INDONESIA' },
                      { label: 'ANK TABUNGAN NEGARA (BTN)', value: 'ANK TABUNGAN NEGARA (BTN)' },
                    ]}
                  />

                  {/* <Picker
                    style={{ height: 40 }}
                    selectedValue={this.state.PickerSelectedVal}
                    onValueChange={(itemValue, itemIndex) => this.setState({ PickerSelectedVal: itemValue })} >

                    <Picker.Item label="BPD BANTEN" value="BPD BANTEN" />
                    <Picker.Item label="BANK COMMONWEALTH" value="BANK COMMONWEALTH" />
                    <Picker.Item label="BANK DANAMON" value="BANK DANAMON" />
                    <Picker.Item label="BANK MAYBANK INDONESIA" value="BANK MAYBANK INDONESIA" />
                    <Picker.Item label="BANK TABUNGAN NEGARA (BTN)" value="BANK TABUNGAN NEGARA (BTN)" />
                  </Picker> */}
                </View>
              </View>

              <View>
                <Text style={styles.text}>Product</Text>
                <View style={styles.picker}>
                  <RNPickerSelect
                    placeholder={{
                      label: '-- Please choose Product --',
                      value: null,
                      color: '#9EA0A4'
                    }}
                    style={{ height: 40 }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                      { label: 'CRM', value: 'CRM' },
                      { label: 'EJM', value: 'EJM' },
                    ]}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.text}>Principle</Text>
                <View style={styles.picker}>
                  <RNPickerSelect
                    placeholder={{
                      label: '-- Please choose Principle --',
                      value: null,
                      color: '#9EA0A4'
                    }}
                    style={{ height: 40 }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                      { label: 'FIORANO', value: 'FIORANO' },
                      { label: 'BPC', value: 'BPC' },
                    ]}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.text}>PIC Name</Text>
                <TextInput
                  style={styles.input} multiline />
              </View>

              <View>
                <Text style={styles.text}>Reference</Text>
                <TextInput
                  style={styles.input} multiline />
              </View>

              <View>
                <Text style={styles.text}>Potential / Budget</Text>
                <TextInput
                  style={styles.input} multiline />
              </View>

              <View>
                <Text style={styles.text}>Pipeline</Text>
                <View style={styles.picker}>
                  <RNPickerSelect
                    placeholder={{
                      label: '-- Please choose Pipeline --',
                      value: null,
                      color: '#9EA0A4'
                    }}
                    style={{ height: 40 }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                      { label: 'Registered', value: 'Registered' },
                      { label: 'Cold Call', value: 'Cold Call' },
                      { label: 'Visit', value: 'Visit' },
                      { label: 'Informal Meeting', value: 'Informal Meeting' },
                      { label: 'Formal Meeting', value: 'Formal Meeting' },
                    ]}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.text}>Principle</Text>
                <View style={styles.picker}>
                  <RNPickerSelect
                    placeholder={{
                      label: '-- Please choose Principle --',
                      value: null,
                      color: '#9EA0A4'
                    }}
                    style={{ height: 40 }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                      { label: 'Active', value: 'Active' },
                      { label: 'Not Active', value: 'Not Active' },
                    ]}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.text}>Remark</Text>
                <TextInput style={styles.input} multiline />
              </View>
            </View>

            <TouchableOpacity style={styles.btnSave}>
              <Text style={styles.textSave}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.SampleFunction}
          style={styles.TouchableOpacityStyle}
        >
          <View style={styles.fabCircle}>
            <Icon name={"plus"} color={"#86C232"} size={24} />
          </View>
        </TouchableOpacity> */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3'
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
  },
  firstLayer: {
    elevation: 3,
    padding: 3
  },
  secondLayer: {
    marginHorizontal: 3,
    marginVertical: 3,
    alignSelf: "stretch",
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 3,
    // flexDirection: "row",
  },
  text: {
    fontSize: 20,
    color: "#2A4580",
    marginHorizontal: 6
  },
  picker: {
    borderWidth: 1,
    borderColor: "#2A4580",
    borderRadius: 3,
    marginHorizontal: 6,
    marginBottom: 6
  },
  input: {
    borderWidth: 1,
    borderColor: '#2A4580',
    borderRadius: 3,
    paddingStart: 10,
    paddingEnd: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginHorizontal: 6,
    marginBottom: 6,
    fontSize: 16,
  },
  btnSave: {
    height: 50,
    backgroundColor: '#2A4580',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 3,
    justifyContent: 'center',
    marginVertical: 3,
    marginHorizontal: 3
  },
  textSave: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center'
  }
})