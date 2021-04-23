import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const startX = 17;
const startY = 23;

const xSep = 16.4;

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
      <Feather name="circle" size={13} color="black" />
    </View>
  );
}
