import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'nachos-ui';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import chordReducer from './reducer';
import Library from './screens/Library';
import ChordStore from './screens/ChordStore';
import { ruby } from './colours';
import LibraryChordZoomed from './screens/LibraryChordZoomed';
import StoreChordZoomed from './screens/StoreChordZoomed';

const store = createStore(chordReducer);

const screenOptions = {
  headerStyle: {
    backgroundColor: ruby,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    height: 60,
  },
  headerTintColor: 'white',
};

const LibraryStack = createStackNavigator();
function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator
      screenOptions={screenOptions}
    >
      <LibraryStack.Screen name="Library" component={Library} />
      <LibraryStack.Screen name="LibraryChordZoomed" component={LibraryChordZoomed} />
    </LibraryStack.Navigator>
  );
}

const AddChordsStack = createStackNavigator();
function AddChordsStackScreen() {
  return (
    <AddChordsStack.Navigator
      screenOptions={screenOptions}
    >
      <AddChordsStack.Screen name="ChordStore" component={ChordStore} />
      <AddChordsStack.Screen name="StoreChordZoomed" component={StoreChordZoomed} />
    </AddChordsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color }) => (route.name === 'Library'
                ? <MaterialIcons name="library-music" size={30} color={color} />
                : <Ionicons name="ios-add-circle-outline" size={30} color={color} />),
            })}
            tabBarOptions={{
              style: {
                borderTopColor: ruby,
              },
              activeBackgroundColor: ruby,
              inactiveBackgroundColor: ruby,
              activeTintColor: 'white',
              inactiveTintColor: 'black',
            }}
          >
            <Tab.Screen name="Library" component={LibraryStackScreen} />
            <Tab.Screen name="ChordStore" component={AddChordsStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
