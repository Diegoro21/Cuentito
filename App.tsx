import React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Button from './app/components/Button';
import Login from './app/screens/Login';

const handleButtonPress = () => {
  console.log('¡Botón presionado!');
};

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hola Mundo</Text>
      <Button onPress={handleButtonPress} title="Presionar aquí" color='unset' 
      colortext='#595D62' underlayColor='unset' hasBorder={true} borderColor='black' />
      <Button onPress={handleButtonPress} title="Presionar aquí" /> */}
      <Login />
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
