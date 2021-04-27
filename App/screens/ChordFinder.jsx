import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import {
  grad1, grad2, ruby,
} from '../colours';
import keys from '../assets/keys';
import suffixes from '../assets/suffixes';

import actions from '../actions';
import Chord from '../components/Chord';

const styles = StyleSheet.create({
  screen: {
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
  const { key } = useSelector(state => state.chordFinder);
  const { suffix } = useSelector(state => state.chordFinder);
  const { chordData } = useSelector(state => state.chordFinder);
  const { chordFound } = useSelector(state => state.chordFinder);
  const dispatch = useDispatch();
  const library = useSelector(state => state.library);
  const [index, setIndex] = useState(0);
  const [isMount, setIsMount] = useState(true);
  const scale = 1.4;

  function addToLibrary(chordVariant) {
    const oldChord = library.find(chord => (
      chord.key === chordVariant.key && chord.suffix === chordVariant.suffix));
    if (!oldChord) {
      dispatch(actions.addToLibrary(chordVariant));
    }
  }

  function genChord(chordVariant) {
    return (
      <View style={styles.container}>
        <Chord chordData={chordVariant} scale={scale} />
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => addToLibrary(chordVariant)}
          >
            <Text style={styles.text}>Add to library</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function noChordFound() {
    if (chordFound === false) {
      return (
        <Text>No chord found</Text>
      );
    } return null;
  }

  let data = [];
  if (chordData && chordData.length) data = chordData.map(chordVariant => genChord(chordVariant));
  const isCarousel = React.useRef(null);

  useEffect(() => {
    (async () => {
      if (isMount) {
        if (key && suffix) {
          await dispatch(actions.getChord(key, suffix));
        }
      }
      return () => {
        setIsMount(false);
      };
    })();
  }, [key, suffix]);

  return (
    <LinearGradient
      colors={[grad1, grad2]}
      style={{ flex: 1 }}
      start={[0.5, 0]}
      end={[0.5, 1]}
      locations={[0, 1]}
    >
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
        {noChordFound()}
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
    </LinearGradient>

  );
}
