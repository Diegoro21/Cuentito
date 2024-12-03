import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Dimensions, Image, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

const Tutorial = () => {
  const translateX = useRef(new Animated.Value(width)).current; // Posición inicial fuera de la pantalla (derecha)
  const translateY = useRef(new Animated.Value(-height)).current; // Posición inicial fuera de la pantalla (arriba)
  const opacity = useRef(new Animated.Value(0)).current; // Inicialmente, la imagen es invisible
  const textOpacity = useRef(new Animated.Value(0)).current;
  const imageOpacity = useRef(new Animated.Value(0)).current; // Opacidad para la imagen del libro

  useEffect(() => {
    // Inicia la animación después de 2 segundos
    const timeout = setTimeout(() => {
      // Animación de movimiento para el cuadrado
      Animated.timing(translateX, {
        toValue: width - width / 1.7, // Se mueve hacia la posición final horizontal
        duration: 1500, // Duración de la animación
        useNativeDriver: true,
      }).start();

      Animated.timing(translateY, {
        toValue: -height + height / 1.6, // Se mueve hacia la posición final vertical
        duration: 1500,
        useNativeDriver: true,
      }).start();
    }, 1500);
    const timeout2 = setTimeout(() => {
      // Animación de movimiento para el cuadrado
      

      // Animación de opacidad para la imagen (hace que aparezca)
      Animated.timing(opacity, {
        toValue: 1, // La imagen se vuelve completamente visible
        duration: 1000, // Duración de la animación
        useNativeDriver: true,
      }).start();

      // Animación de opacidad para la imagen del libro (hace que aparezca)
      Animated.timing(imageOpacity, {
        toValue: 1, // La imagen del libro se vuelve completamente visible
        duration: 1000, // Duración de la animación
        useNativeDriver: true,
      }).start();
    }, 2700);

    const timeout3 = setTimeout(() => {
      Animated.timing(textOpacity, {
        toValue: 1, // La imagen del libro se vuelve completamente visible
        duration: 2000, // Duración de la animación
        useNativeDriver: true,
      }).start();
    }, 2700);

    return () => {clearTimeout(timeout);clearTimeout(timeout2); clearTimeout(timeout3);} // Limpia el timeout al desmontar
  }, [translateX, translateY, opacity, imageOpacity, textOpacity]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            transform: [
              { translateX: translateX },
              { translateY: translateY },
              { rotate: '135deg' },
            ],
          },
        ]}
      />
      
      {/* Imagen astronauta con animación de opacidad */}
      <Animated.Image
        source={require('../../assets/images/astronauta.png')} // Ruta local de la imagen astronauta
        style={[
          styles.image,
          { opacity: opacity }, // Aplica la animación de opacidad
          { top: height / 15, left: width / 2 }
        ]}
      />
      
      {/* Imagen libro con animación de opacidad */}
      <Animated.Image
        source={require('../../assets/images/libro.png')} // Ruta local de la imagen libro
        style={[
          styles.image,
          { opacity: imageOpacity }, // Aplica la animación de opacidad
          { top: height / 3, left: width / 20 }, // Posición en la parte opuesta de la pantalla
        ]}
      />
      {/* Título centrado */}
      <Animated.View style={[{opacity: textOpacity}]}>
      <Text style={styles.title}>Título</Text>
      
      {/* Subtítulo centrado */}
      <Text style={[styles.subtitle, {opacity: textOpacity}]}>Subtítulo lalalalla</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB319',
    width: '100%',
    height: '100%',
  },
  square: {
    width: width,
    height: height,
    backgroundColor: 'white',
    position: 'absolute',
  },
  image: {
    width: 220, // Tamaño de la imagen
    height: 220, // Tamaño de la imagen
    position: 'absolute',
  },
  title: {
    fontSize: 40, // Tamaño del título
    fontWeight: 'bold',
    color: 'black', // Color negro
    textAlign: 'center', // Centrado horizontal
    marginTop: width/1.5, // Espacio entre la imagen y el título
  },
  subtitle: {
    fontSize: 16, // Tamaño del subtítulo
    color: 'black', // Color negro
    textAlign: 'center', // Centrado horizontal
    marginTop: 20, // Espacio entre el título y el subtítulo
  },
});

export default Tutorial;
