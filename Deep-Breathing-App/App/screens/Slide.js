import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  ImageBackground
} from 'react-native';

const Slide = ({ item }) => {
  const { title, desc, backgroundColor, image } = item;
  return (
    <>
      <View style={[styles.slide, { backgroundColor }]}>
        <ImageBackground
          source={image}
          style={{
            resizeMode: 'contain',
            //aspectRatio: 0.5,
            // flex: 1,
            width: 256,
            height: 256,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
            // bottom: height * 0.15
          }}
        />
        <Text style={styles.text_title}>{title}</Text>
        <Text style={styles.text_desc}>{desc}</Text>
      </View>
    </>
  );
};
const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
  slide: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text_title: {
    top: height * 0.1,
    color: '#000000',
    fontSize: 25
  },
  text_desc: {
    top: height * 0.11,
    color: '#2b2b2b',
    fontSize: 15
  }
  // footer: {
  //   backgroundColor: '#9fd696',
  //   height: height * 0.1
  // }
});

export default Slide;
