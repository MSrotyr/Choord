import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const startX = -9;
const startY = -16;

const xSep = 20;

export default function StringHeader({ stringNum, scale }) {
  return (
    <View style={
      {
        zIndex: 1,
        position: 'absolute',
        top: scale * (startY),
        left: scale * (startX + xSep * stringNum),
      }
    }
    >
      <Feather name="x" size={19 * scale} color="black" />
    </View>
  );
}
