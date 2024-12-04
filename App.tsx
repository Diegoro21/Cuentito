import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navigaton from './app/navigation/Navigation';
import Home from './app/screens/Home';

const App = () => {
  return (
    <Home/>
  //   <NavigationContainer>
  //   <Navigaton />
  // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default App;
