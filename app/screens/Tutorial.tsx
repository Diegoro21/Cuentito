import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, StyleSheet, Dimensions, Text } from 'react-native';
import Button from '../components/Button';

const { width, height } = Dimensions.get('window');

import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  TabNavigator: undefined;
  Login: undefined;
  Tutorial: undefined;
};

type TutorialScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Tutorial'>;

interface TutorialProps {
  navigation: TutorialScreenNavigationProp;
}

const Tutorial = ({ navigation }: TutorialProps) => {
  const [firstStep, setFirstStep] = useState(true);

  const translateX = useRef(new Animated.Value(width)).current;
  const translateY = useRef(new Animated.Value(-height)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const textOpacityBack = useRef(new Animated.Value(0)).current;
  const imageOpacity = useRef(new Animated.Value(0)).current;
  const imageDragon = useRef(new Animated.Value(0)).current;
  const timeoutRefs = useRef<(ReturnType<typeof setTimeout>)[]>([]);
  const rotate = useRef(new Animated.Value(135)).current;
  const clearTimeouts = () => {
    timeoutRefs.current.forEach((timeoutId) => clearTimeout(timeoutId));
    timeoutRefs.current = [];
  };

  const resetAnimations = () => {
    // Resetea todas las animaciones
    //translateX.setValue(width);
    //translateY.setValue(-height);
    //opacity.setValue(0);
    //textOpacity.setValue(0);
    textOpacityBack.setValue(0);
    //imageOpacity.setValue(0);
  };

  const resetSquare = () => {
    // Animar el cuadrado al resetear
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: width - width / 1.7, // Nueva posición de X
        duration: 1500, // Duración de la animación
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: -height + height / 1.6, // Nueva posición de Y
        duration: 1500, // Duración de la animación
        useNativeDriver: true,
      }),
      Animated.timing(rotate, {
        toValue: 135, // Nueva rotación
        duration: 1500, // Duración de la animación
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1, // Nueva posición de X
        duration: 1500, // Duración de la animación
        useNativeDriver: true,
      }),
      Animated.timing(imageOpacity, {
        toValue: 1, // Nueva posición de X
        duration: 1500, // Duración de la animación
        useNativeDriver: true,
      }),
      Animated.timing(imageDragon, {
        toValue: 0, // Nueva posición de X
        duration: 1500, // Duración de la animación
        useNativeDriver: true,
      }),
    ]).start();
  };


  useEffect(() => {
    const timeout1 = setTimeout(() => {
      Animated.timing(translateX, {
        toValue: width - width / 1.7,
        duration: 1500,
        useNativeDriver: true,
      }).start();

      Animated.timing(translateY, {
        toValue: -height + height / 1.6,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    }, 1500);

    const timeout2 = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 2700);

    const timeout3 = setTimeout(() => {
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }, 2700);

    timeoutRefs.current.push(timeout1, timeout2, timeout3);

    return () => {
      clearTimeouts();
    };
  }, [translateX, translateY, opacity, imageOpacity, textOpacity]);

  const onPressButton = () => {
    clearTimeouts();
    resetAnimations();
    if (!firstStep) {
      navigation.navigate('TabNavigator');
    }

    setFirstStep(false);

    // Animar la rotación del cuadrado
    Animated.timing(rotate, {
      toValue: 90, // Mantener la rotación a 0 grados (o cualquier valor que prefieras)
      duration: 1500,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateX, {
      toValue: 0, // Mantener la rotación a 0 grados (o cualquier valor que prefieras)
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // Mostrar el texto del siguiente paso después de la transición
    const timeout1 = setTimeout(() => {
      Animated.timing(textOpacityBack, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 500);

    timeoutRefs.current.push(timeout1);
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0, // Nueva posición de X
        duration: 1500, // Duración de la animación
        useNativeDriver: true,
      }),
      Animated.timing(imageOpacity, {
        toValue: 0, // Nueva posición de X
        duration: 1500, // Duración de la animación
        useNativeDriver: true,
      }),
      Animated.timing(imageDragon, {
        toValue: 1, // Nueva posición de X
        duration: 1500, // Duración de la animación
        useNativeDriver: true,
      }),
    ]).start();
  };


  const onPressBack = () => {
    clearTimeouts();
    resetAnimations();
    resetSquare()
    setFirstStep(true);

    const timeout1 = setTimeout(() => {
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 300);
    timeoutRefs.current.push(timeout1);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            transform: [
              { translateX: translateX },
              { translateY: translateY },
              { rotate: rotate.interpolate({ inputRange: [90, 135], outputRange: ['90deg', '135deg'] }) },
            ],
          },
        ]}
      />

      <Animated.Image
        source={require('../../assets/images/astronauta.png')}
        style={[styles.image, { opacity: opacity }, { top: height / 40, left: width / 2.3 }]}
      />

      <Animated.Image
        source={require('../../assets/images/libro.png')}
        style={[styles.image, { opacity: imageOpacity }, { top: height / 3.3, left: width / 2000 }]}
      />
      {!firstStep && (
        <Animated.Image
          source={require('../../assets/images/dragon.png')}
          style={[styles.imageDragon, { opacity: imageDragon }]}
        />
      )}

      <Animated.View style={[{ opacity: textOpacity }]}>
        <Text style={styles.title}>{firstStep ? 'Paso 1!' : 'Paso 2'}</Text>
        <Text style={[styles.subtitle]}>{firstStep ? 'Subtítulo 1' : 'Subtítulo 2 lalala'}</Text>
      </Animated.View>

      <Animated.View style={[{ opacity: textOpacity }, { position: 'absolute', bottom: height / 10, right: 20 }]}>
        <Button title="Siguiente" onPress={onPressButton} />
      </Animated.View>

      {!firstStep && (
        <Animated.View style={[{ opacity: textOpacityBack }, { position: 'absolute', bottom: height / 10, left: 60 }]}>
          <Text style={{ color: '#595D62', fontSize: 14 }} onPress={onPressBack}>
            Volver
          </Text>
        </Animated.View>
      )}
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
    width: 220,
    height: 220,
    position: 'absolute',
  },
  imageDragon:{
    width: 300,
    height: 300,
    position: 'absolute',
    top: height / 30
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: width / 1.5,
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Tutorial;
