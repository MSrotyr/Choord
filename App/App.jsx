import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Library from './screens/Library';
import AddChords from './screens/AddChords';
import { ruby } from './colours';


const LibraryStack = createStackNavigator();
function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: ruby },
        headerTintColor: 'white',
      }}
    >
      <LibraryStack.Screen name="Library" component={Library} />
    </LibraryStack.Navigator>
  );
}

const AddChordsStack = createStackNavigator();
function AddChordsStackScreen() {
  return (
    <AddChordsStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: ruby },
        headerTintColor: 'white',
      }}
    >
      <AddChordsStack.Screen name="Add Chords" component={AddChords} />
    </AddChordsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => (route.name === 'Library'
            ? <MaterialIcons name="library-music" size={30} color={color} />
            : <Ionicons name="ios-add-circle-outline" size={30} color={color} />),
        })}
        tabBarOptions={{
          activeBackgroundColor: ruby,
          inactiveBackgroundColor: ruby,
          activeTintColor: 'white',
          inactiveTintColor: 'black',
        }}
      >
        <Tab.Screen name="Library" component={LibraryStackScreen} />
        <Tab.Screen name="Add Chords" component={AddChordsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
