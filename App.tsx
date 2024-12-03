import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Tutorial from './app/screens/Tutorial';

const App = () => {
  return (
    <View style={styles.container}>
      <Tutorial />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default App;
