import React from 'react';
import { View, Text } from 'react-native';

const startX = -21;
const startY = 1;

export default function FretNumber({ fretNum, scale }) {
  return (
    <View style={
      {
        zIndex: 1,
        position: 'absolute',
        top: scale * startY,
        left: scale * startX,
      }
    }
    >
      <Text style={{ fontSize: 13 * scale }}>{`${fretNum} fr`}</Text>
    </View>
  );
}
