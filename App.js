import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InitialScreen from "./Screens/InitialScreen";

import ScreenNavigation from "./ScreenNavigation";

import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
      <Provider store={store}>
        <ScreenNavigation/>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
