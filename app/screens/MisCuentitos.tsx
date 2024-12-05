import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, Animated, TouchableHighlight, Modal, ActivityIndicator } from "react-native";
import Button from "../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get('window');

type Cuento = {
  idCuento: string;
  titulo: string;
  cuento: string;
  errores: string[];
};

const MisCuentitos = ({ navigation }: any) => {
  const [dataCuento, setDataCuento] = useState<Cuento[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {

    const token = await AsyncStorage.getItem('accessToken');
    console.log(token)

    setIsLoading(true);
    try {
      const response = await fetch("https://apicuentito.facturante.com/Cuentos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
      });

      const data = await response.json();
      if (data.status === "éxito") {
        setIsLoading(false);
        if (Array.isArray(data.data)) {
          setDataCuento(data.data);
        }
        console.log(data.data)
      } else {
        setIsLoading(false);
        //setModalVisible(true);
      }
    } catch (err) {
      //setModalVisible(true);
      setIsLoading(false);
      console.error(err);
    } finally {
      setIsLoading(false);
      //setIsLoading(false);
    }
  }

  useEffect(() => {
    loadData()

    return () => {
      // Clean up
    }
  }, [])


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

      <Modal visible={isLoading} transparent>
        <View style={styles.overlay}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#00b894" />
            <Text style={styles.loadingText}>Cargando...</Text>
          </View>
        </View>
      </Modal>
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
          {dataCuento.length > 0 ? (
            dataCuento.map((cuento: Cuento) => (
              <TouchableHighlight
                key={cuento.idCuento}
                onPress={() => goToCuento(cuento.idCuento)}
                activeOpacity={1}
                underlayColor="#FFE645"
                style={styles.containerTouch}
              >
                <View style={styles.containerCuentitos2}>
                  <View style={styles.containerText1}>
                    <Text style={styles.textTitleCuento}>{cuento.titulo}</Text>
                    <Text style={styles.textGenero}>Género no especificado</Text>
                  </View>
                  <View style={styles.actionCuento}>
                    <Ionicons name="arrow-forward" size={20} style={{ marginLeft: 10 }} />
                  </View>
                </View>
              </TouchableHighlight>
            ))
          ) : (
            <Text>No hay cuentos disponibles</Text>
          )}
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
  },overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro y semitransparente
  },
  loadingContainer: {
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Sombra en Android
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
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
  }
});

export default MisCuentitos;
