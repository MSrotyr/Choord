import React from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { manatee, ruby } from '../colours';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: manatee,
    flex: 1,
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
  text: {
    color: 'white',
  },
});

export default function ChordFinder() {
  return (
    <View style={styles.screen}>
      <View style={styles.btnContainer}>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.text}>Key</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.text}>Suffix</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}
