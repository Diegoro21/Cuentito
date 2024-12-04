import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Tutorial from '../screens/Tutorial';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const Navigaton = () => {
    return (
        <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="tutorial" component={Tutorial} />
            <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
    );
} 

export default Navigaton;
