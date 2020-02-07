import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class RolePage extends Component{
  render(){
  return (
    <View style={styles.container}>
      <Text>RolePage</Text>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
