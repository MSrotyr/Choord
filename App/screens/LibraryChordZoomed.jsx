import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard, BackHandler,
} from 'react-native';
import { manatee } from '../colours';
import Chord from '../components/Chord';
import apiService from '../apiService';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: manatee,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
  },
  input: {
    padding: 5,
    borderWidth: 2,
    width: 265,
    maxWidth: 265,
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 5,
    height: 100,
    backgroundColor: 'white',
  },
});

const scale = 2;

export default function LibraryChordZoomed({ route }) {
  const [comment, setComment] = useState('');
  const chordData = route.params.chordData;

  useEffect(() => {
    return async () => {
    }
  }, [])

  return (
    <TouchableOpacity style={styles.screen} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="position">
        <View>
          <View style={styles.container}>
            <Chord chordData={chordData} scale={scale} />
            <TextInput
              style={styles.input}
              value={comment}
              onChangeText={setComment}
              placeholder="Comments..."
              multiline
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableOpacity>
  );
}