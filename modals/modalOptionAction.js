import React, { Component } from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity, Text } from "react-native";

export default class ModalOptionAction extends Component {

    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "rgba(33, 33, 33, 0.7)",
        flex : 1,
        justifyContent : "center"
    }
})