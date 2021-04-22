import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const startX = 15;
const startY = 21;

const xSep = 16.3;

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
});

export default function StringHeader({ XorO, stringNum }) {
  return (
    <View style={[styles.container,
    {
      position: 'absolute',
      top: startY,
      left: startX + xSep * stringNum,
    }]}
    >
      <Feather name="x" size={18} color="black" />
    </View>
  );
}
