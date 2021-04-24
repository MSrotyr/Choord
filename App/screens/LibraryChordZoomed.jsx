import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard, BackHandler, Text,
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

export default function LibraryChordZoomed({ route, navigation }) {
  const chordData = route.params.chordData;
  const [comment, setComment] = useState(chordData.comment
    ? chordData.comment
    : ''
  );

  function updateComment() {
    if (comment && comment !== chordData.comment) {
      apiService.updateComment(chordData._id, comment);
      navigation.navigate('Library',
        { _id: chordData._id, comment: comment, action: 'UPDATE' });
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
          <View>
            <TextInput
              style={styles.input}
              value={comment}
              onChangeText={setComment}
              placeholder="Comments..."
              multiline
            />
            <TouchableOpacity onPress={updateComment}>
              <Text>Add Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={removeFromLibrary}>
              <Text>Delete Chord</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableOpacity>
  );
}
