import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard, Text,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { celadon, manatee, ruby } from '../colours';
import Chord from '../components/Chord';
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btnStyle: {
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    height: 40,
    width: 120,
  },
  text: {
    color: 'white',
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

  function removeFromLibrary() {
    dispatch(actions.removeFromLibrary(chordData._id));
    navigation.navigate('Library');
  }

  return (
    <TouchableOpacity style={styles.screen} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.container}>
          <Chord chordData={chordData} scale={scale} />
          <View>
            <TextInput
              style={styles.input}
              value={comment}
              onChangeText={setComment}
              placeholder="Comments..."
              multiline
            />
            <View style={styles.buttons}>
              <TouchableOpacity
                onPress={updateComment}
                style={[styles.btnStyle, { backgroundColor: celadon }]}
              >
                <Text style={styles.text}>Add comment</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={removeFromLibrary}
                style={[styles.btnStyle, { backgroundColor: ruby }]}
              >
                <Text style={styles.text}>Delete Chord</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableOpacity>
  );
}
