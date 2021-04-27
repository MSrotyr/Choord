import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import ChordList from '../components/ChordList';
import actions from '../actions';
import { grad1, grad2 } from '../colours';

export default function Library({ navigation }) {
  const dispatch = useDispatch();
  const library = useSelector(state => state.library);

  useEffect(() => {
    dispatch(actions.uploadLibrary());
  }, []);

  function goToChord(chordData) {
    navigation.navigate('LibraryChordZoomed', { chordData });
  }

  return (
    <LinearGradient
      colors={[grad1, grad2]}
      style={{ flex: 1 }}
      start={[0.5, 0]}
      end={[0.5, 1]}
      locations={[0, 1]}
    >
      <ChordList goToChord={goToChord} data={library} />
    </LinearGradient>
  );
}
