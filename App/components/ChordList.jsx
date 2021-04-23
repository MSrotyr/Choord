import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Chord from './Chord';

const scale = 0.85;

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
  },
});

export default function ChordList({ data, goToChord }) {
  return (
    <FlatList
      style={styles.list}
      numColumns={3}
      data={data}
      keyExtractor={(item) => (item.key + item.suffix)}
      renderItem={({ item }) => (
        <Chord goToChord={goToChord} chordData={item} scale={scale} isButton />
      )}
    />

  );
}
