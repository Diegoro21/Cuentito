import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }: any) => {
  const [characters, setCharacters] = useState<string[]>([]);
  const [currentCharacter, setCurrentCharacter] = useState("");
  const [genre, setGenre] = useState("Sin especificar");
  const [length, setLength] = useState("Corto");
  const [openGenre, setOpenGenre] = useState(false);
  const [openLength, setOpenLength] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const createCuento = async () => {
    setIsLoading(true);
    const token = await AsyncStorage.getItem("accessToken");
    try {
      const response = await fetch("https://apicuentito.facturante.com/Cuentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          personajes: characters,
          genero: genre,
          longitud: length,
        }),
      });

      const data = await response.json();
      if (data.status === "éxito") {
        AsyncStorage.setItem("cuento", JSON.stringify(data.data));
        navigation.navigate("Cuento");
      } else {
        setModalVisible(true);
      }
    } catch (err) {
      setModalVisible(true);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const addCharacter = () => {
    if (currentCharacter.trim()) {
      setCharacters((prevCharacters) => [...prevCharacters, currentCharacter]);
      setCurrentCharacter("");
    }
  };

  const removeCharacter = (index: number) => {
    setCharacters(characters.filter((_, i) => i !== index));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* Modal para errores */}
          <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
            <View style={styles.modal}>
              <Text style={styles.modalText}>Algo salió mal :(</Text>
              <Button title="Cerrar" onPress={() => setModalVisible(false)} />
            </View>
          </Modal>

          <Modal isVisible={isLoading} animationIn="fadeIn" animationOut="fadeOut">
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#00b894" />
              <Text style={styles.loadingText}>Cargando...</Text>
            </View>
          </Modal>

          <Text style={styles.title}>Creá tu cuento</Text>
          <Text style={styles.label}>Agregá tus personajes</Text>
          <View style={styles.tagContainer}>
            {characters.map((char, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => removeCharacter(index)}
                style={styles.tag}
              >
                <Text style={styles.tagText}>{char} ✕</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.addCharacterContainer}>
            <TextInput
              style={styles.input}
              value={currentCharacter}
              onChangeText={setCurrentCharacter}
              placeholder="Nombre"
            />
            <TouchableOpacity onPress={addCharacter} style={styles.addButton}>
              <Text style={styles.addText}>Agregar</Text>
              <Ionicons name="add-circle-outline" size={20} />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Temática del cuento</Text>
          <DropDownPicker
            open={openGenre}
            value={genre}
            items={[
              { label: "Sin especificar", value: "Sin especificar" },
              { label: "Fantasía", value: "Fantasía" },
              { label: "Aventura", value: "Aventura" },
              { label: "Cuento de hadas", value: "Cuento de hadas" },
              { label: "Romance", value: "Romance" },
              { label: "Comedia", value: "Comedia" },
            ]}
            setOpen={setOpenGenre}
            setValue={setGenre}
            containerStyle={[styles.dropdown, { zIndex: 1000 }]}
            dropDownContainerStyle={{ zIndex: 1000 }}
          />

          <DropDownPicker
            open={openLength}
            value={length}
            items={[
              { label: "Corto", value: "Corto" },
              { label: "Medio", value: "Mediano" },
              { label: "Largo", value: "Largo" },
            ]}
            setOpen={setOpenLength}
            setValue={setLength}
            containerStyle={[styles.dropdown, { zIndex: 500 }]}
            dropDownContainerStyle={{ zIndex: 500 }}
          />

          <View style={styles.containerButton}>
            <View style={styles.buttonWidth}>
              <Button title="Crear cuento" onPress={createCuento} icon="color-wand-outline" />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: "100%",
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  loadingContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#fff",
  },
  title: {
    fontSize: 24,
    fontFamily: "ConcertOne",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontFamily: "ConcertOne",
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  tag: {
    backgroundColor: "#00b894",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  tagText: {
    color: "#fff",
    fontFamily: "ConcertOne",
  },
  addCharacterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    backgroundColor: "#fff",
    height: 50,
  },
  addButton: {
    padding: 10,
    backgroundColor: "#FFB319",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  addText: {
    color: "black",
    fontFamily: "ConcertOne",
  },
  dropdown: {
    marginBottom: 20,
  },
  containerButton: {
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWidth: {},
});

export default Home;
