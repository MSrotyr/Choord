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
});

function minMaxFretFunc(data) {
  let minFret = 40; // Needs to be any number above 30
  for (let i = 0; i < data.frets.length; i++) {
    if (data.frets[i] < minFret && data.frets[i] > 0) minFret = data.frets[i];
  }
  const maxFret = Math.max(...data.frets);
  return [minFret, maxFret];
}

function extraIconFunc(data, scale) {
  let fretStart = 1;
  const [minFret, maxFret] = minMaxFretFunc(data);
  if (maxFret > 4) {
    fretStart = minFret;
  }
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
        fretNum={data.frets[i] - fretStart}
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
          fretNum={data.frets[i] - fretStart}
          fingerNum={data.fingers[i]}
        />,
      );
    }
  }
  components.push(<FretNumber scale={scale} key="key" fretNum={fretStart} />);
  return components;
}

function genChord(chordData, scale, goToChord) {
  return (
    <View>
      <Text style={{ fontSize: 16 * scale, marginBottom: 14 * scale }}>
        {`${chordData.key} ${chordData.suffix}`}
      </Text>
      <View>
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
  // console.log(goToChord);
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
