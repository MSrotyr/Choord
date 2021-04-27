import React, { useState, useEffect, useRef } from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard, Text,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import {
  grad2, grad1, ruby, mintcream,
} from '../colours';
import Chord from '../components/Chord';
import actions from '../actions';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: mintcream,
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

const scale = 1.6;

export default function LibraryChordZoomed({ route, navigation }) {
  const dispatch = useDispatch();
  const { chordData } = route.params;
  const [comment, setComment] = useState(chordData.comment
    ? chordData.comment
    : '');

  const commentRef = useRef(comment);

  function updateComment(commentToAdd) {
    if (commentToAdd && commentToAdd !== chordData.comment) {
      dispatch(actions.updateComment(chordData._id, commentToAdd));
    }
  }

  useEffect(() => (
    () => {
      updateComment(commentRef.current);
    }
  ), []);

  function removeFromLibrary() {
    dispatch(actions.removeFromLibrary(chordData._id));
    navigation.navigate('Library');
  }

  return (
    <LinearGradient
      colors={[grad1, grad2]}
      style={{ flex: 1 }}
      start={[0.5, 0]}
      end={[0.5, 1]}
      locations={[0, 1]}
    >
      <TouchableOpacity style={styles.screen} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.container}>
            <Chord chordData={chordData} scale={scale} />
            <View>
              <TextInput
                style={styles.input}
                value={comment}
                onChangeText={(newComment) => {
                  setComment(newComment);
                  commentRef.current = newComment;
                }}
                placeholder="Comments..."
                multiline
              />
              <View style={styles.buttons}>
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
    </LinearGradient>

  );
}
