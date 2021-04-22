import React from 'react';
import { StyleSheet, View } from 'react-native';
import chordData from '../assets/tempChords.json';
import ChordList from '../components/ChordList';
import { tuscany } from '../colours';

// Test data
const data = chordData.chords.C;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: tuscany,
    flex: 1,
  },
});

export default function AddChords() {
  return (
    <View style={styles.screen}>
      <ChordList data={data} />
    </View>
  );
}
