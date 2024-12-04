import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const HomeScreen = () => {
    const [characters, setCharacters] = useState<string[]>([]);
  const [currentCharacter, setCurrentCharacter] = useState("");
  const [genre, setGenre] = useState("Fantasía");
  const [length, setLength] = useState("Corto");
  const [openGenre, setOpenGenre] = useState(false);
  const [openLength, setOpenLength] = useState(false);

  const addCharacter = () => {
    if (currentCharacter.trim()) {
      setCharacters([...characters, currentCharacter]);
      setCurrentCharacter("");
    }
  };

  const removeCharacter = (index:any) => {
    setCharacters(characters.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crea tu cuento</Text>

      {/* Agregar personajes */}
      <Text style={styles.label}>Agrega tus personajes</Text>
      <View style={styles.row}>
        {characters.map((char, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => removeCharacter(index)}
            style={styles.tag}
          >
            <Text style={styles.tagText}>{char} ✕</Text>
          </TouchableOpacity>
        ))}
        <TextInput
          style={styles.input}
          value={currentCharacter}
          onChangeText={setCurrentCharacter}
          placeholder="Nombre"
        />
        <TouchableOpacity onPress={addCharacter} style={styles.addButton}>
          <Text style={styles.addText}>Agregar</Text>
        </TouchableOpacity>
      </View>

      {/* Género del cuento */}
      <Text style={styles.label}>Género del cuento</Text>
      <DropDownPicker
        open={openGenre}
        value={genre}
        items={[
          { label: "Fantasía", value: "Fantasía" },
          { label: "Ciencia ficción", value: "Ciencia ficción" },
          { label: "Aventura", value: "Aventura" },
        ]}
        setOpen={setOpenGenre}
        setValue={setGenre}
        containerStyle={styles.dropdown}
      />

      {/* Longitud del cuento */}
      <Text style={styles.label}>Longitud del cuento</Text>
      <DropDownPicker
        open={openLength}
        value={length}
        items={[
          { label: "Corto", value: "Corto" },
          { label: "Medio", value: "Medio" },
          { label: "Largo", value: "Largo" },
        ]}
        setOpen={setOpenLength}
        setValue={setLength}
        containerStyle={styles.dropdown}
      />

      {/* Botón Crear cuento */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Crear cuento</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
    fontFamily: 'Concert One'
    //font-family:' Concert One',
    //font-size: 40px,
    //font-weight: 400,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    backgroundColor: "#fff",
  },
  addButton: {
    padding: 10,
    backgroundColor: "#00b894",
    borderRadius: 8,
  },
  addText: {
    color: "#fff",
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
  },
  dropdown: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#00b894",
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
