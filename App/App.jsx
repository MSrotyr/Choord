import React from "react";
import "react-native-get-random-values";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Modal from "./screens/Modal";
import chordReducer from "./reducer";
import Library from "./screens/Library";
import ChordStore from "./screens/ChordStore";
import { raspberry } from "./colours";
import LibraryChordZoomed from "./screens/LibraryChordZoomed";
import StoreChordZoomed from "./screens/StoreChordZoomed";
import ChordFinder from "./screens/ChordFinder";

const store = createStore(chordReducer, applyMiddleware(thunk));

const screenOptions = {
  headerStyle: {
    backgroundColor: raspberry,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    height: 60,
  },
  headerTintColor: "white",
};

const LibraryStack = createStackNavigator();
function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator screenOptions={screenOptions}>
      <LibraryStack.Screen name="Library" component={Library} />
      <LibraryStack.Screen
        name="LibraryChordZoomed"
        component={LibraryChordZoomed}
        options={({ route }) => ({
          title: `${route.params.chordData.key} ${route.params.chordData.suffix}`,
        })}
      />
    </LibraryStack.Navigator>
  );
}

const AddChordsStack = createStackNavigator();
function AddChordsStackScreen() {
  return (
    <AddChordsStack.Navigator screenOptions={screenOptions}>
      <AddChordsStack.Screen name="Store" component={ChordStore} />
      <AddChordsStack.Screen
        name="StoreChordZoomed"
        component={StoreChordZoomed}
        options={({ route }) => ({
          title: `${route.params.chordData.key} ${route.params.chordData.suffix}`,
        })}
      />
    </AddChordsStack.Navigator>
  );
}

const ChordFinderStack = createStackNavigator();
function ChordFinderStackScreen() {
  return (
    <ChordFinderStack.Navigator screenOptions={screenOptions}>
      <ChordFinderStack.Screen name="Chord Finder" component={ChordFinder} />
      <AddChordsStack.Screen
        name="StoreChordZoomed"
        component={StoreChordZoomed}
        options={({ route }) => ({
          title: `${route.params.chordData.key} ${route.params.chordData.suffix}`,
        })}
      />
    </ChordFinderStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabStack() {
  return (
    <Tab.Navigator
      lazy={false}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          if (route.name === "Library")
            return (
              <MaterialIcons name="library-music" size={30} color={color} />
            );
          if (route.name === "Store")
            return <FontAwesome5 name="store" size={24} color={color} />;
          return <FontAwesome name="search" size={24} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          borderTopColor: raspberry,
        },
        activeBackgroundColor: raspberry,
        inactiveBackgroundColor: raspberry,
        activeTintColor: "white",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen name="Store" component={AddChordsStackScreen} />
      <Tab.Screen name="Library" component={LibraryStackScreen} />
      <Tab.Screen name="Chord Finder" component={ChordFinderStackScreen} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator mode="modal">
          <RootStack.Screen
            name="Tabs"
            component={TabStack}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Modal"
            component={Modal}
            headerStyle={{ backgroundColor: "red" }}
            options={({ route }) => ({
              title: `Choose a ${route.params.mode}`,
              headerStyle: {
                backgroundColor: raspberry,
              },
              headerTintColor: "white",
            })}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
