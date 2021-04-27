import React from 'react';
import {
  View, StyleSheet, Image, Text, TouchableOpacity,
} from 'react-native';
import chordImg from '../assets/chord.png';
import Number from './Number';
import X from './X';
import O from './O';
import FretNumber from './FretNumber';
import Barre from './Barre';

const padding = 8;
const paddingLeft = 22;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 6.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  black: {
    backgroundColor: 'black',
    zIndex: 2,
  },
});

function extraIconFunc(data, scale) {
  const finished = [];
  const components = [];
  for (let i = 0; i < 6; i++) {
    if (finished.includes(data.fingers[i])) continue;

    const restRev = data.fingers.slice(i + 1).reverse();
    const lastIndex = 6 - 1 - restRev.indexOf(data.fingers[i]);

    if (data.frets[i] === -1) components.push(<X scale={scale} key={i} stringNum={i} />);
    else if (data.frets[i] === 0) components.push(<O scale={scale} key={i} stringNum={i} />);

    else if (lastIndex !== 6) {
      // barre chord
      components.push(<Barre
        scale={scale}
        startStringNum={i}
        endStringNum={lastIndex}
        fretNum={data.frets[i] - 1}
        fingerNum={data.fingers[i]}
        key={i}
      />);
      finished.push(data.fingers[i]);
    } else {
      components.push(
        <Number
          scale={scale}
          key={i}
          stringNum={i}
          fretNum={data.frets[i] - 1}
          fingerNum={data.fingers[i]}
        />,
      );
    }
  }
  components.push(<FretNumber scale={scale} key="key" fretNum={data.baseFret} />);
  return components;
}

function chordLines(scale) {
  const topBarX = 0;
  const topBarY = 0;
  const xsep = 10 * scale;
  const ysep = 10 * scale;
  return (
    <View style={[styles.black, { top: topBarX, left: topBarY }]}></View>
  );
}

function genChord(chordData, scale, goToChord) {
  return (
    <View>
      <Text style={{ fontSize: 16 * scale, marginBottom: 14 * scale }}>
        {`${chordData.key} ${chordData.suffix}`}
      </Text>
      <View>
        {chordLines()}
        {extraIconFunc(chordData, scale)}
        <Image
          style={{ width: 102 * scale, height: 127 * scale }}
          source={chordImg}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}


export default function Chord({
  chordData, scale, goToChord, isButton,
}) {
  if (isButton) {
    return (
      <TouchableOpacity
        onPress={() => {
          if (goToChord) {
            goToChord(chordData);
          }
        }}
        style={[styles.container, {
          padding: padding * scale,
          paddingLeft: paddingLeft * scale,
        }]}
      >
        {genChord(chordData, scale, goToChord)}
      </TouchableOpacity>
    );
  }

  return genChord(chordData, scale, goToChord);
}
