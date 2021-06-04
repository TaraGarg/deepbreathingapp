import 'react-native-gesture-handler'
import 'react-navigation'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{ createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './App/screens/MainScreen'
import PanicScreen from './App/screens/PanicScreen'
import FocusScreen from './App/screens/FocusScreen'
import StressScreen from './App/screens/StressScreen'

const Navigator = createStackNavigator({
  MainScreen: {screen: MainScreen},
  PanicScreen: {screen: PanicScreen},
  FocusScreen: {screen: FocusScreen},
  StressScreen: {screen: StressScreen},
});

const App = createAppContainer(Navigator);

export default App;

