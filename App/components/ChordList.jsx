import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CHORD_LIST_SCALE } from "../constants";
import Chord from "./Chord";

const scale = CHORD_LIST_SCALE;
const styles = StyleSheet.create({
  list: {
    marginTop: 10,
  },
});

export default function ChordList({ data, goToChord }) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        numColumns={3}
        data={data}
        keyExtractor={(item) => item.key + item.suffix}
        renderItem={({ item }) => (
          <Chord
            goToChord={goToChord}
            chordData={item}
            scale={scale}
            isButton
          />
        )}
      />
    </View>
  );
}
