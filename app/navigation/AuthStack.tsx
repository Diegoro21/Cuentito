import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Tutorial from '../screens/Tutorial';
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tutorial"
        component={Tutorial}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;