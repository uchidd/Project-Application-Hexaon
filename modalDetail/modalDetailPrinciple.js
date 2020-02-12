import React, { Component } from "react";
import { View, StyleSheet, Text} from "react-native";

export default class ModalDetailPrinciple extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>LalaAA</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        alignSelf : "stretch",
        backgroundColor : "red"
    }
})