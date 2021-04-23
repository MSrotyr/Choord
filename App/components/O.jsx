import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const startX = -5;
const startY = -13.6;

const xSep = 19.8;

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
      <Feather name="circle" size={13 * scale} color="black" />
    </View>
  );
}
