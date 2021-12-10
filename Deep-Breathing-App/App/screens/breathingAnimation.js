import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

//When using useEffect and incrementing a timer of some sort, a cleanup function is essential otherwise it keeps incrementing even when the screen is not present (the component is unmounted)

const BreathingAnimation = ({ item }) => {
  const { inhaleTime, topHoldTime, exhaleTime, bottomHoldTime } = item;
  const [seconds, setSeconds] = React.useState(0);

  //Create the timer by incrementing a counter about every second. Since the code is lengthy there may be a delay
  React.useEffect(() => {
    let timer1 = setTimeout(() => setSeconds((seconds) => seconds + 1), 990);

    return () => {
      clearTimeout(timer1);
    };
  }, [seconds]);

  let totalIntervalTime =
    inhaleTime + topHoldTime + exhaleTime + bottomHoldTime;
  let curTime = seconds % totalIntervalTime;
  if (curTime < inhaleTime) {
    return 'Inhale';
  } else if (inhaleTime <= curTime && curTime < inhaleTime + topHoldTime) {
    return 'Hold';
  } else if (
    inhaleTime + topHoldTime <= curTime &&
    curTime < inhaleTime + topHoldTime + exhaleTime
  ) {
    return 'Exhale';
  } else return 'Hold';
};
export default BreathingAnimation;
