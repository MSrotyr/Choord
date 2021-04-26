import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { manatee, ruby } from '../colours';
import keys from '../assets/keys';
import suffixes from '../assets/suffixes';

import actions from '../actions';
import Chord from '../components/Chord';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: manatee,
    flex: 1,
    alignItems: 'center',
  },
  btnContainer: {
    marginVertical: 20,
  },
  btn: {
    backgroundColor: ruby,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
    width: 250,
    margin: 5,
  },
  btn2: {
    marginVertical: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ruby,
    padding: 10,
    borderRadius: 5,
    height: 40,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  container: {
    width: 299,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
  },
});

export default function ChordFinder({ navigation }) {
  const { key, suffix } = useSelector(state => state.chordFinder);
  const { chordData } = useSelector(state => state.chordFinder);
  const { chordFound } = useSelector(state => state.chordFinder);
  const dispatch = useDispatch();
  const library = useSelector(state => state.library);
  const [index, setIndex] = useState(0);
  const scale = 1.4;

  function genChord(chordVariant) {
    if (chordFound) {
      return (
        <View style={styles.container}>
          <Chord chordData={chordVariant} scale={scale} />
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.btn2}
              onPress={addToLibrary}
            >
              <Text style={styles.text}>Add to library</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    if (chordFound === false) {
      return (
        <Text>No chord found</Text>
      );
    }
    return null;
  }

  let data = [];
  if (chordData) data = chordData.map(chordVariant => genChord(chordVariant));
  const isCarousel = React.useRef(null);

  useEffect(() => {
    (async () => {
      if (key && suffix) {
        await dispatch(actions.getChord(key, suffix));
      }
    })();
  }, [key, suffix]);

  function addToLibrary() {
    const oldChord = library.find(chord => (
      chord.key === chordData.key && chord.suffix === chordData.suffix));
    if (!oldChord) {
      dispatch(actions.addToLibrary(chordData));
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Modal', { data: keys, mode: 'key' })}
        >
          <View style={styles.btn}>
            <Text style={styles.text}>{key || 'Choose a key'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Modal', { data: suffixes, mode: 'suffix' })}
        >
          <View style={styles.btn}>
            <Text style={styles.text}>{suffix || 'Choose a suffix'}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Carousel
        layout="tinder"
        useScrollView
        onSnapToItem={(newIndex) => { setIndex(newIndex); }}
        layoutCardOffset={9}
        inactiveSlideShift={0}
        ref={isCarousel}
        renderItem={({ item }) => item}
        data={data}
        sliderWidth={500}
        itemWidth={300}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots
      />
    </View>
  );
}
