import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, ImageBackground } from 'react-native';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

export default function Cuento( {navigation}: any ) {


  const navigateTo = () => {
    navigation.navigate('HomeStack', {screen:'Mis Cuentitos'})
  };
  

  return (
    <ImageBackground source={require('../../assets/images/fondo.png')} // Ruta de la imagen de fondo
    style={styles.containerInputs}
    resizeMode="cover" // La imagen cubrirá toda la pantalla
    >

      <View style={styles.viewTitle}>
        <Text style={styles.textTitle} 
          numberOfLines={2} 
          adjustsFontSizeToFit>La Tierra de los Sueños Brillantes
        </Text>
      </View>

      <View style={styles.containerText}>
        <ScrollView style={styles.containerScroll} 
        keyboardShouldPersistTaps="always"
        persistentScrollbar={true}
        >
          <Text style={styles.text}>
          asadasdasd1 dasdas dasd dasd asd sada asdasd sadsa dasdasad dasd adasdasd asdasdsa asdasdasd asdsadas adsadas adsadasd as dasdas dasd asdasd asdasdasdasd dsa dasdasd asdsadasd das dasdasd sad asdasdasdas ds  asadasdasd dasdas dasd dasd asd sada asdasd sadsa dasdasadasd as dasdas dasd asdasd asdasdasdasd dsa dasdasd asdsadasd das dasdasd sad asdasdasdas ds asadasdasd dasdas dasd dasd asd sada asdasd sadsa dasdasadasd as dasdas dasd asdasd asdasdasdasd dsa das asadasdasd dasdas dasd dasd asd sada asdasd sadsa dasdasadasd as dasdas dasd asdasd asdasdasdasd dsa dasdasd asdsadasd das dasdasd sad asdasdasdas ds asadasdasd dasdas dasd dasd asd sada asdasd sadsa dasdasadasd as dasdas dasd asdasd asdasdasdasd dsa dasdasd asdsadasd das dasdasd sad asdasdasdas ds asadasdasd dasdas dasd dasd asd sada asdasd sadsa dasdasadasd as dasdas dasd asdasd asdasdasdasd dsa dasdasd asdsadasd das dasdasd sad asdasdasdas ds asadasdasd dasdas dasd dasd asd sada asdasd sadsa dasdasadasd as dasdas dasd asdasd asdasdasdasd dsa dasdasd asdsadasd das dasdasd sad asdasdasdas ds asadasdasd dasdas dasd dasd asd sada asdasd sadsa dasdasadasd as dasdas dasd asdasd asdasdasdasd dsa dasdasd asdsadasd das dasdasd sad asdasdasdas ds asadasdasd dasdas dasd dasd asd sada asdasd sadsa dasdasadasd as dasdas dasd asdasd asdasdasdasd dsa dasdasd asdsadasd das dasdasd sad asdasdasdas ds asadasdasd dasdas dasd dasd asd sada asdasd sadsa dasdasadasd as dasdas dasd asdasd asdasdasdasd dsa dasdasd asdsadasd das dasdasd sad asdasdasdas dsdasd asdsadasd das dasdasd sad asdasdasdas Hola
          </Text>
        </ScrollView>
      </View>
      
      <View style={styles.containerButton}>
        <View style={styles.buttonWidth}>
          <Button title="Ir a mis cuentitos" onPress={navigateTo} />
        </View>
      </View>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerInputs: {
    width: width,
    height: height,
    paddingHorizontal: 20,
    margin: 'auto',
  },
  viewTitle: {
    justifyContent: 'center',
    marginTop: '8%',
    backgroundColor: '#FFB319',
    borderRadius: 6,
    borderColor: 'Black',
    borderWidth: 1,
    width: '100%',
    height: '16%',
    display: 'flex',
    alignItems: 'center',
  },
  textTitle: {
    fontFamily: 'Concert One',
    justifyContent: 'center',
    textDecorationLine: 'underline',
    // backgroundColor: '#FFB319',
    width: '90%',
    fontSize: 40,
    fontWeight: '400',
    color: '#F5F5F5',
    textAlign: 'center',
  },
  containerText: {
    width: '100%',
    height: '64%',
    marginTop: '6%',
    borderRadius: 6,
    borderColor: 'Black',
    borderWidth: 1,
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexShrink: 1,
  },
  containerScroll:{
    // overflow: 'scroll',
    // padding: 15,
    margin: 15,
    // height: '60%',
    // flexGrow: 1,
    // flexShrink: 1,
    fontFamily: 'DM Sans',
    fontSize: 20,
    fontWeight: '700',
    color: '#595D62',
  },
  containerButton: {
    width: '100%',
    marginTop:  '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // width: '40%'
    // overflow: 'visible'
    marginRight: 10,
  },
  buttonWidth: {
    // width: '40%'
  },
});
