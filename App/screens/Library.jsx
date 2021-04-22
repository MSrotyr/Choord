import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { tuscany } from '../colours';
import Chord from '../components/Chord';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: tuscany,
    flex: 1,
  },
});

export default function Library() {
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Chord />
          <Chord />
          <Chord />
          <Chord />
          <Chord />
          <Chord />
          <Chord />
          <Chord />
          <Chord />
          <Chord />
          <Chord />
          <Chord />
          <Chord />
          <Chord />
          <Chord />
          <Chord />
          <Chord />
          <Chord />
          <Chord />
        </View>
      </ScrollView>
    </View>
  );
}
