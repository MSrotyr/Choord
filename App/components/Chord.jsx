import React from 'react';
import {
  View, StyleSheet, Image, Text,
} from 'react-native';
import chordImg from '../assets/chord.png';
import Number from './Number';
import X from './X';
import O from './O';

const imageScale = 0.965;
const padding = 8;

const styles = StyleSheet.create({
  container: {
    maxWidth: 102 * imageScale + 2 * padding,
    backgroundColor: 'white',
    padding,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: 5,
  },
  chord: {
    width: 102 * imageScale,
    height: 127 * imageScale,
  },
  chordName: {
    marginBottom: 12,
  },
});

function fretNumberComponents(data) {
  const components = [];
  for (let i = 0; i < data.frets.length; i++) {
    if (data.frets[i] === -1) components.push(<X key={i} stringNum={i} />);
    else if (data.frets[i] === 0) components.push(<O key={i} stringNum={i} />);
    else {
      components.push(
        <Number key={i} stringNum={i} fretNum={data.frets[i] - 1} fingerNum={data.fingers[i]} />,
      );
    }
  }
  return components;
}


export default function Chord({ chordData }) {
  return (
    <View style={styles.container}>
      <Text style={styles.chordName}>{chordData.key + chordData.suffix}</Text>
      {fretNumberComponents(chordData.positions[0])}
      <Image
        style={styles.chord}
        source={chordImg}
        resizeMode="contain"
      />
    </View>
  );
}
