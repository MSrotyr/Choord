import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Library from './screens/Library';
import AddChords from './screens/AddChords';


const LibraryStack = createStackNavigator();
function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen name="Library" component={Library} />
    </LibraryStack.Navigator>
  );
}

const AddChordsStack = createStackNavigator();
function AddChordsStackScreen() {
  return (
    <AddChordsStack.Navigator>
      <AddChordsStack.Screen name="Add Chords" component={AddChords} />
    </AddChordsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Library" component={LibraryStackScreen} />
        <Tab.Screen name="Add Chords" component={AddChordsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
