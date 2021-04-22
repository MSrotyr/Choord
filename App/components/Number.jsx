import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  celadon, honey, prussian, ruby,
} from '../colours';

const startX = 14;
const startY = 47;

const xSep = 16.8;
const ySep = 25;

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 15,
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

export default function Number({ fingerNum, fretNum, stringNum }) {
  let color;
  if (fingerNum === 1) color = ruby;
  if (fingerNum === 2) color = prussian;
  if (fingerNum === 3) color = celadon;
  if (fingerNum === 4) color = honey;
  return (
    <View style={[styles.background,
    {
      backgroundColor: color,
      position: 'absolute',
      top: startY + (ySep * fretNum),
      left: startX + (xSep * stringNum),
    }]}
    >
      <Text style={styles.text}>{fingerNum}</Text>
    </View>
  );
}
