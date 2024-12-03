import React from 'react';
import { View, StyleSheet } from 'react-native';
import Tutorial from './app/screens/Tutorial';
import Login from './app/screens/Login';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Tutorial /> */}
      <Login/>
    </View>
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
