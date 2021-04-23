import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { manatee } from '../colours';
import apiService from '../apiService';
import ChordList from '../components/ChordList';


const styles = StyleSheet.create({
  screen: {
    backgroundColor: manatee,
    flex: 1,
  },
});

export default function Library({ navigation }) {
  const [libChords, setLibChords] = useState([]);

  useEffect(() => {
    (async () => {
      let chords;
      try {
        chords = await apiService.getLibrary();
      } catch (err) {
        console.log(err);
      }
      setLibChords((prevState) => [...prevState, ...chords]);
    })();
  }, []);

  function goToChord(chordData) {
    navigation.navigate('LibraryChordZoomed', { chordData });
  }

  return (
    <View style={styles.screen}>
      <ChordList goToChord={goToChord} data={libChords} />
    </View>
  );
}
