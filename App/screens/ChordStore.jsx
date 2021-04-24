import React from 'react';
import { StyleSheet, View } from 'react-native';
import beginnerChords from '../assets/beginnerChords.json';
import ChordList from '../components/ChordList';
import { manatee } from '../colours';

const data = beginnerChords.chords;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: manatee,
    flex: 1,
  },
});

export default function ChordStore({ navigation }) {
  function goToChord(chordData) {
    navigation.navigate('StoreChordZoomed', { chordData });
  }

  return (
    <View style={styles.screen}>
      <ChordList goToChord={goToChord} data={data} />
    </View>
  );
}
