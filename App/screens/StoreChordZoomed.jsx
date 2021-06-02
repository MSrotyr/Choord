import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { grad1, grad2, mintcream, raspberry } from "../colours";
import Chord from "../components/Chord";
import actions from "../actions";
import { CHORD_ZOOMED_SCALE } from "../constants";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: 299,
    padding: 10,
    borderRadius: 10,
    backgroundColor: mintcream,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
  },
  btnStyle: {
    marginVertical: 15,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: raspberry,
    padding: 10,
    borderRadius: 5,
    height: 40,
  },
  text: {
    color: "white",
  },
});

const scale = CHORD_ZOOMED_SCALE;

export default function LibraryChordZoomed({ route, navigation }) {
  const library = useSelector((state) => state.library);
  const dispatch = useDispatch();
  const { chordData } = route.params;

  function addToLibrary() {
    const oldChord = library.find(
      (chord) =>
        chord.key === chordData.key && chord.suffix === chordData.suffix
    );
    if (!oldChord) {
      dispatch(actions.addToLibrary(chordData));
    }
    navigation.goBack();
  }

  return (
    <LinearGradient
      colors={[grad1, grad2]}
      style={{ flex: 1 }}
      start={[0.5, 0]}
      end={[0.5, 1]}
      locations={[0, 1]}
    >
      <View style={styles.screen}>
        <View style={styles.container}>
          <Chord chordData={chordData} scale={scale} />
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.btnStyle} onPress={addToLibrary}>
              <Text style={styles.text}>Add to library</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
