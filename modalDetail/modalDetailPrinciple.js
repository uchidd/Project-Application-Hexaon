import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class ModalDetailPrinciple extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.mainView}>
                    <View style={styles.titleView}>
                        <Text style={styles.textTitle}>Details</Text>
                    </View>
                    <View style={styles.contentView}>
                        <View style={styles.topRow}>
                            <View style={styles.leftView}>
                                <Text style={styles.text}>ID</Text>
                            </View>
                            <View style={styles.rightView}>
                                <Text style={styles.text}>1</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.leftView}>
                                <Text style={styles.text}>Name</Text>
                            </View>
                            <View style={styles.rightView}>
                                <Text style={styles.text}>FIORANO</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.leftView}>
                                <Text style={styles.text}>Email</Text>
                            </View>
                            <View style={styles.rightView}>
                                <Text style={styles.text}>rajesh.rao@fiorano.com</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.leftView}>
                                <Text style={styles.text}>Phone</Text>
                            </View>
                            <View style={styles.rightView}>
                                <Text style={styles.text}>+919880924021</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.leftView}>
                                <Text style={styles.text}>Address</Text>
                            </View>
                            <View style={styles.rightView}>
                                <Text style={styles.text}>India</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.leftView}>
                                <Text style={styles.text}>PIC Name</Text>
                            </View>
                            <View style={styles.rightView}>
                                <Text style={styles.text}>Rajesh Rao</Text>
                            </View>
                        </View>
                        <View style={styles.rowBottom}>
                            <View style={styles.leftView}>
                                <Text style={styles.text}>PIC Contact</Text>
                            </View>
                            <View style={styles.rightView}>
                                <Text style={styles.text}>+919880924021</Text>
                            </View>
                        </View>
                    </View>
                    
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textTitle}>Close</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        alignSelf : "stretch",
        backgroundColor : "rgba(33, 33, 33, 0.7)",
        padding : 3,
        flexDirection : "column",
        justifyContent : "center",
        flex : 1
    },
    mainView : {
        alignSelf : "stretch",
        backgroundColor : "#222629",
        margin : 3,
        padding : 3,
        flexDirection : "column",
        borderRadius : 3,
        borderColor : "#86C232",
        borderWidth : 2
    },
    titleView : {
        backgroundColor : "transparent",
        margin : 3,
        padding : 3,
        justifyContent : "center", 
        alignItems : "center",
        height : 40
    },
    textTitle : {
        fontSize : 24,
        color : "#86C232",
    },
    contentView : {
        alignSelf : "stretch",
        backgroundColor : "#474B4F",
        margin : 3,
        flexDirection : "column",
        borderRadius : 3,
        borderColor : "#86C232",
        borderWidth : 2,
    },
    topRow : {
        alignSelf : "stretch",
        backgroundColor : "transparent",
        flexDirection : "row",
        borderBottomWidth : 1,
        borderBottomColor : "#86C232",
    },
    leftView : {
        alignSelf : "stretch",
        backgroundColor : "transparent",
        borderRightWidth : 1,
        borderRightColor : "#86C232",
        width : 100,
        padding : 3,
        justifyContent : "center"
    },
    rightView : {
        alignSelf : "stretch",
        backgroundColor : "transparent",
        borderLeftWidth : 1,
        borderLeftColor : "#86C232",
        padding : 3,
        flex : 1,
        justifyContent : "center"
    },
    text : {
        fontSize : 16,
        color : "#86C232",
        margin : 3
    },
    row : {
        alignSelf : "stretch",
        backgroundColor : "transparent",
        flexDirection : "row",
        borderBottomWidth : 1,
        borderBottomColor : "#86C232",
        borderTopColor : "#86C232",
        borderTopWidth : 1,
    },
    rowBottom : {
        alignSelf : "stretch",
        backgroundColor : "transparent",
        flexDirection : "row",
        borderTopColor : "#86C232",
        borderTopWidth : 1,
    },
    button : {
        height : 50,
        backgroundColor : "#222629",
        margin : 3,
        padding : 3,
        flexDirection : "column",
        borderRadius : 3,
        borderColor : "#86C232",
        borderWidth : 2,
        justifyContent : "center",
        alignItems : "center"
    }
}) 