import React from 'react';
import { useDispatch } from 'react-redux';
import {
  View, StyleSheet, Text, TouchableOpacity, FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  grad1, grad2, raspberry,
} from '../colours';
import actions from '../actions';

const styles = StyleSheet.create({
  screen: {
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
    borderColor: raspberry,
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
    <LinearGradient
      colors={[grad1, grad2]}
      style={{ flex: 1 }}
      start={[0.5, 0]}
      end={[0.5, 1]}
      locations={[0, 1]}
    >
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
    </LinearGradient>

  );
}
