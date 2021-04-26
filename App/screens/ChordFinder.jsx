import React, { useEffect } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { manatee, ruby } from '../colours';
import keys from '../assets/keys';
import suffixes from '../assets/suffixes';

import actions from '../actions';
import Chord from '../components/Chord';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: manatee,
    flex: 1,
    alignItems: 'center',
  },
  btnContainer: {
    alignItems: 'center',
  },
  btn: {
    backgroundColor: ruby,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 80,
    width: 250,
    margin: 5,
  },
  btn2: {
    marginVertical: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ruby,
    padding: 10,
    borderRadius: 5,
    height: 40,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  container: {
    width: 299,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
  },
});

export default function ChordFinder({ navigation }) {
  const { key, suffix } = useSelector(state => state.chordFinder);
  const { chordData } = useSelector(state => state.chordFinder);
  const dispatch = useDispatch();
  const library = useSelector(state => state.library);
  const scale = 1;

  useEffect(() => {
    (async () => {
      if (key && suffix) {
        await dispatch(actions.getChord(key, suffix));
      }
    })();
  }, [key, suffix]);

  function addToLibrary() {
    const oldChord = library.find(chord => (
      chord.key === chordData.key && chord.suffix === chordData.suffix));
    if (!oldChord) {
      dispatch(actions.addToLibrary(chordData));
    }
  }

  function genChord() {
    if (chordData) {
      return (
        <View style={styles.container}>
          <Chord chordData={chordData} scale={scale} />
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.btn2}
              onPress={addToLibrary}
            >
              <Text style={styles.text}>Add to library</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } return null;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Modal', { data: keys, mode: 'key' })}
        >
          <View style={styles.btn}>
            <Text style={styles.text}>{key || 'Choose a key'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Modal', { data: suffixes, mode: 'suffix' })}
        >
          <View style={styles.btn}>
            <Text style={styles.text}>{suffix || 'Choose a suffix'}</Text>
          </View>
        </TouchableOpacity>
      </View>
      {genChord()}

    </View>
  );
}
