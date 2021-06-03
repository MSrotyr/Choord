import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import beginnerChords from "../assets/beginnerChords.json";
import { grad1, grad2 } from "../colours";
import ChordList from "../components/ChordList";

const data = beginnerChords.chords;

export default function ChordStore({ navigation }) {
  function goToChord(chordData, title) {
    navigation.navigate("StoreChordZoomed", { chordData, title });
  }
  return (
    <LinearGradient
      colors={[grad1, grad2]}
      style={{ flex: 1 }}
      start={[0.5, 0]}
      end={[0.5, 1]}
      locations={[0, 1]}
    >
      <ChordList goToChord={goToChord} data={data} />
    </LinearGradient>
  );
}
