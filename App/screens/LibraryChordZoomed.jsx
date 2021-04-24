import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'nachos-ui';
import { manatee } from '../colours';
import Chord from '../components/Chord';
import apiService from '../apiService';
import actions from '../actions';

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
  btnStyle: {
    marginTop: -10,
  },
});

const scale = 2;

export default function LibraryChordZoomed({ route, navigation }) {
  const dispatch = useDispatch();
  const { chordData } = route.params;
  const [comment, setComment] = useState(chordData.comment
    ? chordData.comment
    : '');

  function updateComment() {
    if (comment && comment !== chordData.comment) {
      dispatch(actions.updateComment(chordData._id, comment));
    }
  }

  function removeFromLibrary(_id) {
    apiService.removeFromLibrary(chordData._id, comment);
    navigation.navigate('Library', { _id: chordData._id, action: 'DELETE' });
  }

  return (
    <TouchableOpacity style={styles.screen} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.container}>
          <Chord chordData={chordData} scale={scale} />
          <View style={{ maxHeight: 200 }}>
            <TextInput
              style={styles.input}
              value={comment}
              onChangeText={setComment}
              placeholder="Comments..."
              multiline
            />
            <Button onPress={updateComment} style={styles.btnStyle}>Add</Button>
            <Button onPress={removeFromLibrary} style={styles.btnStyle}>Delete Chord</Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableOpacity>
  );
}
