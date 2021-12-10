import React, { Component } from 'react';
import {
  style,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Button
} from 'react-native';
import { withOrientation } from 'react-navigation';

export default class MainScreen extends React.Component {
  static naviagtionOptions = {
    title: 'Home'
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainStyle}>
        <View style={styles.topSelections}>
          <View style={styles.resourcesStyle}>
            <Text onPress={() => navigate('ResourcesScreen')}>Resources</Text>
          </View>
          <View style={styles.informationStyle}>
            <Text onPress={() => navigate('InformationScreen')}>
              Information
            </Text>
          </View>
        </View>
        <View style={styles.titleText}>
          <Text style={styles.textStyle}>Main Page</Text>
          <Text
            style={styles.sinWavesStyle}
            onPress={() => navigate('TestingWaves', { value: 2 })}
          >
            Sin Waves
          </Text>
        </View>
        <View style={styles.buttonsBack}>
          <TouchableWithoutFeedback onPress={() => navigate('PanicScreen')}>
            <View style={styles.buttonPanic}>
              <Text style={styles.buttonText}>Panic Button</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.bottomButtons}>
            <TouchableWithoutFeedback onPress={() => navigate('FocusScreen')}>
              <View style={styles.buttonFocus}>
                <Text style={styles.buttonText}>Focus Button</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigate('StressScreen')}>
              <View style={styles.buttonStress}>
                <Text style={styles.buttonText}>Stress Button</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: 'white',
    flex: 1
  },
  titleText: {
    top: 100
  },
  buttonsBack: {
    width: '100%',
    height: '75%',
    backgroundColor: 'white',
    top: '25%'
  },
  buttonPanic: {
    backgroundColor: '#FF7575',
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  bottomButtons: {
    flex: 0.75,
    top: '10%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  buttonFocus: {
    backgroundColor: '#049A64',
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStress: {
    backgroundColor: '#53D396',
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500'
  },
  textStyle: {
    color: 'dodgerblue',
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  sinWavesStyle: {
    alignSelf: 'center',
    fontWeight: '900',
    fontSize: 20
  },
  resourcesStyle: {
    top: 25
  },
  informationStyle: {
    top: 25
  },
  topSelections: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center'
  }
});
