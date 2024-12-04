import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './app/navigation/AuthStack';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loggedStatus = await AsyncStorage.getItem('@isLogged');
        if (loggedStatus !== null) {
          setIsLogged(JSON.parse(loggedStatus));  // Lo convertimos de string a booleano
        }
      } catch (e) {
        console.error('Error al leer el estado de login:', e);
      } finally {
        setIsLoading(false);  // Deja de mostrar el indicador de carga
      }
    };

    checkLoginStatus();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;