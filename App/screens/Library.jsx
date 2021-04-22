import React from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import { tuscany } from '../colours';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: tuscany,
    flex: 1,
  },
});

export default function Library() {
  return (
    <View style={styles.screen}>
      <Text>Working</Text>
    </View>
  );
}
