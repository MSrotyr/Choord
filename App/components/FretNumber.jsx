import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const startX = 0;
const startY = 60;

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
  text: {
    fontSize: 12,
  }
});

export default function FretNumber({ fretNum }) {
  return (
    <View style={[styles.container,
    {
      position: 'absolute',
      top: startY,
      left: startX
    }]}
    >
      <Text style={styles.text}>{`${fretNum} fr`}</Text>
    </View>
  );
}
