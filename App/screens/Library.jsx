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

export default function Library({ navigation, route }) {
  const [libChords, setLibChords] = useState([]);

  useEffect(() => {
    console.log('trig')
    if (route.params) {
      const chord = libChords.find(chord => chord._id === route.params._id)
      if (route.params.action === 'UPDATE') {
        chord.comment = route.params.comment;
      }
      else {
        setLibChords(prevState => prevState.filter(chord => chord._id !== route.params._id))
      }
    }
  }, [route.params])



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
