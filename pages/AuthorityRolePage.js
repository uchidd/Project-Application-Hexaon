import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome5';

export default class AuthorityRolePage extends Component{

  static navigationOptions = {
    drawerLabel: "Authority (Role)",
    drawerIcon: () => <Icon name={"address-book"} color={"#86C232"} size={19} />
  };

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
