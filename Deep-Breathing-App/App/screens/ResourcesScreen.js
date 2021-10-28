import React from 'react';
import {
  style,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Resources Screen'
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.main}>
        <Text style={styles.title}>ResourceScreen</Text>
        <Text style={styles.title} onPress={() => navigate('MainScreen')}>
          Return to main
        </Text>
        <Text style={styles.text}>Insert Text Here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1
  },
  title: {
    top: 250,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    top: 400,
    fontSize: 14
  }
});
