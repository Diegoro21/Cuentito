import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login( {navigation}: any ) {

  

  return (
    <View style={styles.containerInputs}>
        
    </View>
  );
}

const styles = StyleSheet.create({
    containerInputs: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f8f9fa',
  },
});
