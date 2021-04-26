import React from 'react';
import { useDispatch } from 'react-redux';
import {
  View, StyleSheet, Text, TouchableOpacity, FlatList,
} from 'react-native';
import { manatee, ruby } from '../colours';
import actions from '../actions';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: manatee,
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 80,
    width: 80,
    height: 80,
    borderColor: ruby,
    borderWidth: 2,
  },
  text: {
    color: 'black',
  },
});

export default function Modal({ route, navigation }) {
  const dispatch = useDispatch();
  const { data } = route.params;
  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.list}
        numColumns={3}
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              dispatch(actions.updateKeyOrSuffix(
                { mode: route.params.mode, [route.params.mode]: item },
              ));
              navigation.navigate('Chord Finder');
            }}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
