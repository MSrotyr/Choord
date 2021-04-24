import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { manatee } from '../colours';
import apiService from '../apiService';
import ChordList from '../components/ChordList';
import actions from '../actions';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: manatee,
    flex: 1,
  },
});

export default function Library({ navigation }) {
  const dispatch = useDispatch();
  const library = useSelector(state => state.library);

  useEffect(() => {
    (async () => {
      let chords;
      try {
        chords = await apiService.getLibrary();
      } catch (err) {
        console.log(err);
      }
      dispatch(actions.uploadLibrary(chords));
    })();
  }, []);

  function goToChord(chordData) {
    navigation.navigate('LibraryChordZoomed', { chordData });
  }

  return (
    <View style={styles.screen}>
      <ChordList goToChord={goToChord} data={library} />
    </View>
  );
}
