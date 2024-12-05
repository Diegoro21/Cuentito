import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, Animated, TouchableHighlight } from "react-native";
import Button from "../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";

const { width, height } = Dimensions.get('window');

const MisCuentitos = ({ navigation }: any) => {
  // Datos para generar los cuentos dinámicamente
  const cuentosData = [
    { id: '1', title: 'La tierra de los sueños brillantes', genre: 'Fantasía' },
    { id: '2', title: 'El bosque encantado', genre: 'Aventura' },
    { id: '4', title: 'Las estrellas y sus secretos', genre: 'Ciencia ficción' },
    { id: '5', title: 'Las estrellas y sus secretos', genre: 'Ciencia ficción' },
    { id: '6', title: 'Las estrellas y sus secretos', genre: 'Ciencia ficción' },
    { id: '7', title: 'Las estrellas y sus secretos', genre: 'Ciencia ficción' },
    { id: '8', title: 'Las estrellas y sus secretos', genre: 'Ciencia ficción' },
    { id: '9', title: 'Las estrellas y sus secretos', genre: 'Ciencia ficción' },
  ];

  // Función para navegar a la pantalla de "Cuento"
  const goToCuento = (id: string) => {
    navigation.navigate('Cuento', { id });
  };

  // Función para navegar a "Crear Cuento"
  const navigateTo = () => {
    navigation.navigate('HomeStack', { screen: 'Crear Cuento' });
  };

  return (
    <View style={styles.containerCuentos}>
      <View style={styles.containerImg}>
        <Animated.Image source={require('../../assets/images/dragonLector.png')} />
      </View>

      <View style={styles.viewTitle}>
        <Text style={styles.textTitle} numberOfLines={2} adjustsFontSizeToFit>
          Mis Cuentitos
        </Text>
      </View>

      <View style={styles.containerText}>
        <ScrollView
          style={styles.containerScroll}
          keyboardShouldPersistTaps="always"
          persistentScrollbar={true}
        >
          <View style={styles.containerCuentitos}>
            {cuentosData.map((cuento) => (
              <TouchableHighlight
                key={cuento.id}
                onPress={() => goToCuento(cuento.id)} // Pasar el ID al navegar
                activeOpacity={1} // Sin opacidad al presionar
                underlayColor="#FFE645" // Sin color de fondo al presionar
                style={styles.containerTouch}
              >
                <View style={styles.containerCuentitos2}>
                  <View style={styles.containerText1}>
                    <Text style={styles.textTitleCuento}>{cuento.title}</Text>
                    <Text style={styles.textGenero}>{cuento.genre}</Text>
                  </View>
                  <View style={styles.actionCuento}>
                    <View style={styles.containerButton}>
                      <Ionicons
                        name="arrow-forward"
                        size={20}
                        style={{
                          marginLeft: 10,
                        }}
                      />
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={styles.containerButton}>
        <View>
          <Button title="Crear Cuento" onPress={navigateTo} icon="add-circle-outline" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Tus estilos actuales
  containerCuentos: {
    width: width,
    height: height,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF48A',
  },
  containerImg: {
    marginTop: '8%',
  },
  viewTitle: {
    justifyContent: 'center',
    width: '100%',
    height: '14%',
    display: 'flex',
    alignItems: 'center',
  },
  textTitle: {
    fontFamily: 'Concert One',
    justifyContent: 'center',
    width: '90%',
    fontSize: 40,
    fontWeight: '800',
    textAlign: 'center',
  },
  containerText: {
    width: '100%',
    height: '40%',
    display: 'flex',
  },
  containerText1: {
    width: '88%',
  },
  containerCuentitos: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  containerCuentitos2: {
    display: 'flex',
    flexDirection: 'row',
  },
  containerScroll: {
    fontFamily: 'DM Sans',
    fontSize: 20,
    fontWeight: '700',
    width: '100%',
    color: '#595D62',
  },
  containerButton: {
    width: '100%',
    marginTop: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitleCuento: {
    fontFamily: 'Concert One',
    fontSize: 16,
    fontWeight: '800',
  },
  textGenero: {
    fontFamily: 'DM Sans',
    fontSize: 12,
    fontWeight: '400',
  },
  actionCuento: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTouch: {
    borderRadius: 8,
    marginVertical: 5,
  },
});

export default MisCuentitos;
