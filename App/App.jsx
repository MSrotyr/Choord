import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
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
import ChordFinder from './screens/ChordFinder';

const store = createStore(chordReducer, applyMiddleware(thunk));

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
      <LibraryStack.Screen
        name="LibraryChordZoomed"
        component={LibraryChordZoomed}
        options={({ route }) => ({ title: `${route.params.chordData.key} ${route.params.chordData.suffix}` })}
      />
    </LibraryStack.Navigator>
  );
}

const AddChordsStack = createStackNavigator();
function AddChordsStackScreen() {
  return (
    <AddChordsStack.Navigator
      screenOptions={screenOptions}
    >
      <AddChordsStack.Screen name="Store" component={ChordStore} />
      <AddChordsStack.Screen
        name="StoreChordZoomed"
        component={StoreChordZoomed}
        options={({ route }) => (
          { title: `${route.params.chordData.key} ${route.params.chordData.suffix}` }
        )}
      />
    </AddChordsStack.Navigator>
  );
}

const ChordFinderStack = createStackNavigator();
function ChordFinderStackScreen() {
  return (
    <ChordFinderStack.Navigator
      screenOptions={screenOptions}
    >
      <ChordFinderStack.Screen name="Chord Finder" component={ChordFinder} />
    </ChordFinderStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabStack() {
  return (
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
      <Tab.Screen name="Store" component={AddChordsStackScreen} />
      <Tab.Screen name="Chord Finder" component={ChordFinderStackScreen} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen name="Tabs" component={TabStack} options={{ headerShown: false }} />
          </RootStack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
