import React, { Component } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Picker, Button } from "react-native";
import Header from "../headers/header";
import { DrawerActions } from 'react-navigation-drawer';
import Icon from "react-native-vector-icons/FontAwesome5";
import HeaderSearchWithButton from "../headers/headerSearchWithButton";
import { TextInput } from "react-native-gesture-handler";

export default class LeadProjectPage extends Component{

  static navigationOptions = {
    drawerLabel: 'Lead Project',
    drawerIcon: () => (
      <Icon name={"file-upload"} color={"#2A4580"} size={19}/>
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
      PickerSelectedVal : ''
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

  render(){
    return(
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
                  <Picker
                    style={{height: 40}}
                    selectedValue={this.state.PickerSelectedVal}
                    onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >

                    <Picker.Item label="BPD BANTEN" value="BPD BANTEN" />
                    <Picker.Item label="BANK COMMONWEALTH" value="BANK COMMONWEALTH" />
                    <Picker.Item label="BANK DANAMON" value="BANK DANAMON" />
                    <Picker.Item label="BANK MAYBANK INDONESIA" value="BANK MAYBANK INDONESIA" />
                    <Picker.Item label="BANK TABUNGAN NEGARA (BTN)" value="BANK TABUNGAN NEGARA (BTN)" />
                  </Picker>
                </View>
              </View>

              <View>
                <Text style={styles.text}>Product</Text>
                <View style={styles.picker}>
                  <Picker
                    style={{height: 40}}
                    selectedValue={this.state.PickerSelectedVal}
                    onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >

                    <Picker.Item label="CRM" value="CRM" />
                    <Picker.Item label="EJM" value="EJM" />
                  </Picker>
                </View>
              </View>

              <View>
                <Text style={styles.text}>Principle</Text>
                <View style={styles.picker}>
                  <Picker
                    style={{height: 40}}
                    selectedValue={this.state.PickerSelectedVal}
                    onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >

                    <Picker.Item label="FIORANO" value="FIORANO" />
                    <Picker.Item label="BPC" value="BPC" />
                  </Picker>
                </View>
              </View>

              <View>
                <Text style={styles.text}>PIC Name</Text>
                <TextInput 
                  style={styles.input} multiline/>
              </View>

              <View>
                <Text style={styles.text}>Reference</Text>
                <TextInput 
                  style={styles.input} multiline/>
              </View>

              <View>
                <Text style={styles.text}>Potential / Budget</Text>
                <TextInput 
                  style={styles.input} multiline/>
              </View>

              <View>
                <Text style={styles.text}>Pipeline</Text>
                <View style={styles.picker}>
                  <Picker
                    style={{height: 40}}
                    selectedValue={this.state.PickerSelectedVal}
                    onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >

                    <Picker.Item label="Registered" value="Registered" />
                    <Picker.Item label="Cold Call" value="Cold Call" />
                    <Picker.Item label="Visit" value="Visit" />
                    <Picker.Item label="Informal Meeting" value="Informal Meeting" />
                    <Picker.Item label="Formal Meeting" value="Formal Meeting" />
                  </Picker>
                </View>
              </View>
            
              <View>
                <Text style={styles.text}>Principle</Text>
                <View style={styles.picker}>
                  <Picker
                    style={{height: 40}}
                    selectedValue={this.state.PickerSelectedVal}
                    onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >

                    <Picker.Item label="Active" value="Active" />
                    <Picker.Item label="Not Active" value="Not Active" />
                  </Picker>
                </View>
              </View>

              <View>
                <Text style={styles.text}>Remark</Text>
                  <TextInput style={styles.input} multiline/>
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
  container : {
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