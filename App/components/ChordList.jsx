import React from 'react';
import { FlatList, View } from 'react-native';
import Chord from './Chord';

export default function ChordList({ data }) {
  return (
    <View>
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
