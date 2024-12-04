import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useFonts } from "@expo-google-fonts/concert-one";
import { Ionicons } from '@expo/vector-icons';

const MisCuentitos = () => {
    const [characters, setCharacters] = useState<string[]>([]);
    const [currentCharacter, setCurrentCharacter] = useState("");
    const [genre, setGenre] = useState("1");
    const [length, setLength] = useState("Corto");
    const [openGenre, setOpenGenre] = useState(false);
    const [openLength, setOpenLength] = useState(false);

    const [fontsLoaded] = useFonts({
        ConcertOne: require("@expo-google-fonts/concert-one"),
    });

    const addCharacter = () => {
        if (currentCharacter.trim()) {
            setCharacters([...characters, currentCharacter]);
            setCurrentCharacter("");
        }
    };

    const removeCharacter = (index: number) => {
        setCharacters(characters.filter((_, i) => i !== index));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis cuentitos</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  // Centra verticalmente
        alignItems: 'center',
        backgroundColor: '#FFF48A'
      },
    title: {
        fontSize: 40,
        fontFamily: "ConcertOne", // Fuente personalizada
        marginBottom: 20,
        textAlign: "center",
    },
    label: {
        fontSize: 16,
        fontFamily: "ConcertOne", // Fuente personalizada
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
        fontFamily: "ConcertOne", // Fuente personalizada
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
    },
    addButton: {
        padding: 10,
        backgroundColor: "#FFB319",
        borderRadius: 8,
    },
    addText: {
        color: "black",
        fontFamily: "ConcertOne", // Fuente personalizada
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
        fontFamily: "ConcertOne", // Fuente personalizada
    },
});

export default MisCuentitos;