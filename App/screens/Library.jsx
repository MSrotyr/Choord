import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { charleston, ruby, magnolia } from '../colours';
import { MaterialIcons } from '@expo/vector-icons';

export default function Library() {
  return (
    <View style={styles.screen}>
      <Text>Library working</Text>
      <MaterialIcons name="library-music" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: magnolia,
    flex: 1,
  }
})
