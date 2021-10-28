import React from 'react';
import { View, StyleSheet } from 'react-native';
import { defineAnimation } from 'react-native-reanimated';

const Indicators = ({ indicatorCount, currentSlideIndex }) => {
  if (!indicatorCount || typeof indicatorCount !== 'number') return null;
  let indicators = [];

  for (let i = 0; i < indicatorCount; i++) {
    indicators.push(i);
  }

  return indicators.map((indicator, index) => (
    <View
      key={indicator.toString()}
      style={[
        styles.indicator,
        index === currentSlideIndex ? styles.selected : styles.unSelected
      ]}
    />
  ));
};

const styles = StyleSheet.create({
  indicator: {
    width: 5,
    height: 5,
    backgroundColor: 'grey',
    borderRadius: 5,
    marginHorizontal: 3
  },
  selected: {
    backgroundColor: 'black'
  },
  unSelected: {
    // backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: 'grey'
  }
});

export default Indicators;
