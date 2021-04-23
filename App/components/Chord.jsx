import React from 'react';
import {
  View, StyleSheet, Image, Text,
} from 'react-native';
import chordImg from '../assets/chord.png';
import Number from './Number';
import X from './X';
import O from './O';
import FretNumber from './FretNumber';
import Barre from './Barre';

const imageScale = 0.83;
const padding = 8;
const paddingLeft = 22;

const styles = StyleSheet.create({
  container: {
    maxWidth: 102 * imageScale + 2 * padding + paddingLeft,
    backgroundColor: 'white',
    padding,
    paddingLeft,
    margin: 5,
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

//find minimum fret
function minMaxFretFunc(data) {
  let minFret = 40; //Needs to be any number above 30
  for (let i = 0; i < data.frets.length; i++) {
    if (data.frets[i] < minFret && data.frets[i] > 0) minFret = data.frets[i]
  }
  const maxFret = Math.max(...data.frets);
  return [minFret, maxFret];
}

function extraIconFunc(data) {
  let fretStart = 1
  const [minFret, maxFret] = minMaxFretFunc(data);
  if (maxFret > 4) {
    fretStart = minFret;
  }
  let finished = []
  const components = [];
  for (let i = 0; i < 6; i++) {

    if (finished.includes(data.fingers[i])) continue;

    let restRev = data.fingers.slice(i + 1).reverse();
    let lastIndex = 6 - 1 - restRev.indexOf(data.fingers[i]);

    if (data.frets[i] === -1) components.push(<X key={i} stringNum={i} />);
    else if (data.frets[i] === 0) components.push(<O key={i} stringNum={i} />);

    else if (lastIndex !== 6) {
      //barre chord
      components.push(<Barre
        startStringNum={i}
        endStringNum={lastIndex}
        fretNum={data.frets[i] - fretStart}
        fingerNum={data.fingers[i]}
        key={i} />);
      finished.push(data.fingers[i])
    }

    else {
      components.push(
        <Number key={i} stringNum={i} fretNum={data.frets[i] - fretStart} fingerNum={data.fingers[i]} />,
      );
    }
  }
  components.push(<FretNumber key={'key'} fretNum={fretStart} />);
  return components;
}


export default function Chord({ chordData }) {
  return (
    <View style={styles.container}>
      <Text style={styles.chordName}>{chordData.key + chordData.suffix}</Text>
      {extraIconFunc(chordData.positions[0])}
      <Image
        style={styles.chord}
        source={chordImg}
        resizeMode="contain"
      />
    </View>
  );
}
