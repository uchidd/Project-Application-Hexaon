import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from "react-native";

export default class ModalDetailPrinciple extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
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
                                <Text style={styles.text}>LALALALALLALALALAAL</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.leftView}>
                                <Text style={styles.text}>Name</Text>
                            </View>
                            <View style={styles.rightView}>
                                <Text style={styles.text}>{this.props.nameModal}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.leftView}>
                                <Text style={styles.text}>Email</Text>
                            </View>
                            <View style={styles.rightView}>
                                <Text style={styles.text}>{this.props.emailModal}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.leftView}>
                                <Text style={styles.text}>Phone</Text>
                            </View>
                            <View style={styles.rightView}>
                                <Text style={styles.text}>{this.props.phoneModal}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.leftView}>
                                <Text style={styles.text}>Address</Text>
                            </View>
                            <View style={styles.rightView}>
                                <Text style={styles.text}>{this.props.addressModal}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.leftView}>
                                <Text style={styles.text}>PIC Name</Text>
                            </View>
                            <View style={styles.rightView}>
                                <Text style={styles.text}>{this.props.pic_nameModal}</Text>
                            </View>
                        </View>
                        <View style={styles.rowBottom}>
                            <View style={styles.leftView}>
                                <Text style={styles.text}>PIC Contact</Text>
                            </View>
                            <View style={styles.rightView}>
                                <Text style={styles.text}>{this.props.pic_contactModal}</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <TouchableOpacity onPress={this.props.hideModalViewData} style={styles.button}>
                    <Text style={styles.textButton}>Close</Text>
                </TouchableOpacity>
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
<<<<<<< HEAD
=======
    },
    container: {
        alignSelf: "stretch",
        backgroundColor: "rgba(33, 33, 33, 0.7)",
        padding: 3,
        flexDirection: "column",
        justifyContent: "center",
        flex: 1
    },
    mainView: {
        alignSelf: "stretch",
        backgroundColor: "#FFFFFF",
        margin: 3,
        padding: 3,
        flexDirection: "column",
        borderRadius: 5,
        borderColor: "#FFFFFF",
        borderWidth: 2
>>>>>>> 839b09ce118e0c0348aa8d48152246b56d9d64b3
    },
    titleView: {
        backgroundColor: "transparent",
        margin: 3,
        padding: 3,
        justifyContent: "center",
        alignItems: "center",
        height: 40
    },
    textTitle: {
        fontSize: 24,
        color: "#2A4580",
    },
    contentView : {
        alignSelf : "stretch",
        backgroundColor : "#D3D3D3",
        margin : 3,
        flexDirection : "column",
        borderRadius : 5,
        borderColor : "#2A4580",
        borderWidth : 2,
<<<<<<< HEAD
=======
    },
    contentView: {
        alignSelf: "stretch",
        backgroundColor: "#D3D3D3",
        margin: 3,
        flexDirection: "column",
        borderRadius: 3,
        borderColor: "#2A4580",
        borderWidth: 2,
>>>>>>> 839b09ce118e0c0348aa8d48152246b56d9d64b3
    },
    topRow: {
        alignSelf: "stretch",
        backgroundColor: "transparent",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#2A4580",
    },
    leftView: {
        alignSelf: "stretch",
        backgroundColor: "transparent",
        borderRightWidth: 1,
        borderRightColor: "#2A4580",
        width: 100,
        padding: 3,
        justifyContent: "center"
    },
    rightView: {
        alignSelf: "stretch",
        backgroundColor: "transparent",
        borderLeftWidth: 1,
        borderLeftColor: "#2A4580",
        padding: 3,
        flex: 1,
        justifyContent: "center"
    },
    text: {
        fontSize: 16,
        color: "#2A4580",
        margin: 3
    },
    row: {
        alignSelf: "stretch",
        backgroundColor: "transparent",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#2A4580",
        borderTopColor: "#2A4580",
        borderTopWidth: 1,
    },
    rowBottom: {
        alignSelf: "stretch",
        backgroundColor: "transparent",
        flexDirection: "row",
        borderTopColor: "#2A4580",
        borderTopWidth: 1,
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
<<<<<<< HEAD
=======
    },
    button: {
        height: 50,
        backgroundColor: "#FFFFFF",
        margin: 3,
        padding: 3,
        flexDirection: "column",
        borderRadius: 5,
        borderColor: "#FFFFFF",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center"
>>>>>>> 839b09ce118e0c0348aa8d48152246b56d9d64b3
    }
})