import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const X = {
  0: 0,
  1: 19,
  2: 39,
  3: 58,
  4: 77,
  5: 95,
};

const O = {
  0: 3,
  1: 20,
  2: 39,
  3: 60,
  4: 80,
  5: 98,
};

const YX = 21.5;
const YO = 23;

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
});

function XorOfunc(XorO) {
  return XorO === 'X'
    ? <Feather name="x" size={18} color="black" />
    : <Feather name="circle" size={13} color="black" />;
}

export default function StringHeader({ XorO, stringNum }) {
  return (
    <View style={[styles.container,
      {
        position: 'absolute',
        top: XorO === 'X' ? YX : YO,
        left: XorO === 'X' ? X[stringNum] : O[stringNum],
      }]}
    >
      {XorOfunc(XorO)}
    </View>
  );
}
