import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  celadon, honey, prussian, ruby,
} from '../colours';

const startX = -7;
const startY = 12;

const xSep = 19.8;
const ySep = 30;

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    color: 'white',
    zIndex: 1,
  },
  text: {
    color: 'white',
  },
});

export default function Number({
  fingerNum, fretNum, stringNum, scale,
}) {
  let color;
  if (fingerNum === 1) color = ruby;
  if (fingerNum === 2) color = prussian;
  if (fingerNum === 3) color = celadon;
  if (fingerNum === 4) color = honey;
  return (
    <View style={[styles.background,
      {
        width: 17 * scale,
        height: 17 * scale,
        backgroundColor: color,
        position: 'absolute',
        top: scale * (startY + (ySep * fretNum)),
        left: scale * (startX + (xSep * stringNum)),
      }]}
    >
      <Text style={[styles.text, { fontSize: 14 * scale }]}>{fingerNum}</Text>
    </View>
  );
}
