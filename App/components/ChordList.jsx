import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Chord from './Chord';

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
  },
});

export default function ChordList({ data }) {
  return (
    <View style={styles.list}>
      <FlatList
        numColumns={3}
        data={data}
        keyExtractor={(item) => (item.key + item.suffix)}
        renderItem={({ item }) => (
          <Chord chordData={item} />
        )}
      />
    </View>
  );
}
