import React, { Component } from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity, Text } from "react-native";

export default class ModalOptionAction extends Component {

    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.mainView}>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>Edit</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>Delete</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>Close</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "rgba(211, 211, 211, 0.7)",
        padding : 3,
        flexDirection : "column",
        justifyContent : "center",
        flex : 1
    },
    mainView : {
        alignSelf : "stretch",
        backgroundColor : "#FFFFFF",
        margin : 3,
        padding : 3,
        flexDirection : "column",
        borderRadius : 5,
    },
    button : {
        height : 50,
        backgroundColor : "#2A4580",
        margin : 3,
        padding : 3,
        flexDirection : "column",
        borderRadius : 5,
        justifyContent : "center",
        alignItems : "center"
    },
    textButton : {
        fontSize : 24, 
        color : "#FFFFFF",
    }
})