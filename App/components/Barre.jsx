import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  celadon, honey, prussian, ruby,
} from '../colours';

const startX = 18.5;
const startY = 47;

const xSep = 16.9;
const ySep = 25;

const initWidth = 23

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 15,
    borderRadius: 20,
    color: 'white',
    zIndex: 1,
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});

export default function Barre({ fingerNum, fretNum, startStringNum, endStringNum }) {
  const width = endStringNum - startStringNum
  // console.log(startStringNum, endStringNum)
  let color;
  if (fingerNum === 1) color = ruby;
  if (fingerNum === 2) color = prussian;
  if (fingerNum === 3) color = celadon;
  if (fingerNum === 4) color = honey;
  return (
    <View style={[styles.background,
    {
      width: initWidth + xSep * (width - 1),
      backgroundColor: color,
      position: 'absolute',
      top: startY + (ySep * fretNum),
      left: startX + (xSep * startStringNum),
    }]}
    >
      <Text style={styles.text}>{fingerNum}</Text>
    </View>
  );
}
