import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions } from 'react-native';
import Indicators from './Indicators';
import Slide from './Slide';
const Welcome = ({ slides = [], onDone }) => {
  if (!slides || !slides.length) return null;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef();

  const sliderChange = useRef((item) => {
    const index = item.viewableItems[0].index;
    setCurrentSlideIndex(index);
  });

  const handleSkip = () => {
    flatListRef.current.scrollToEnd({ animated: true });
  };

  const handleNext = () => {
    if (currentSlideIndex >= slides.length - 1) return;
    flatListRef.current.scrollToIndex({ index: currentSlideIndex + 1 });
  };

  const handleBack = () => {
    if (currentSlideIndex >= slides.length + 1) return;
    flatListRef.current.scrollToIndex({ index: currentSlideIndex - 1 });
  };
  return (
    <>
      <FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        horizontal //This makes it so you can scroll horizontally (by default it is set to vertical)
        pagingEnabled //paging makes it so each ea
        data={slides}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({ item }) => <Slide item={item} />}
        onViewableItemsChanged={sliderChange.current}
      />
      <View style={styles.footer}></View>
      <View style={styles.indicatorContainer}>
        <Indicators
          currentSlideIndex={currentSlideIndex}
          indicatorCount={slides.length}
        />
      </View>
      {currentSlideIndex === 0 ? (
        <Text onPress={handleSkip} style={[styles.button, styles.leftButton]}>
          Skip
        </Text>
      ) : (
        <Text onPress={handleBack} style={[styles.button, styles.leftButton]}>
          Back
        </Text>
      )}
      {currentSlideIndex < slides.length - 1 ? (
        <Text onPress={handleNext} style={[styles.button, styles.rightButton]}>
          Next
        </Text>
      ) : (
        <Text onPress={onDone} style={[styles.button, styles.rightButton]}>
          Done
        </Text>
      )}
    </>
  );
};
const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
  indicatorContainer: {
    position: 'absolute',
    width,
    bottom: height * 0.055,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    fontSize: 15,
    color: 'black',
    letterSpacing: 2
  },
  leftButton: {
    position: 'absolute',
    left: width / 10,
    bottom: height * 0.05
  },
  rightButton: {
    position: 'absolute',
    right: width / 10,
    bottom: height * 0.05
  },
  footer: {
    backgroundColor: '#ebd375',
    height: height * 0.1
  }
});

export default Welcome;
