import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import chordImg from '../assets/chord.png';

const imageScale = 0.825;

const styles = StyleSheet.create({
  container: {
    maxWidth: 139 * imageScale,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  chord: {
    width: 139 * imageScale,
    height: 186 * imageScale,
  },
});

export default function Chord() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.chord}
        source={chordImg}
        resizeMode="contain"
      />
    </View>
  );
}
