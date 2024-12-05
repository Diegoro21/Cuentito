import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useFonts } from "@expo-google-fonts/concert-one";
import { Ionicons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Button from "../components/Button";


const Home = ({navigation}: any) => {
  const [characters, setCharacters] = useState<string[]>([]);
  const [currentCharacter, setCurrentCharacter] = useState("");
  const [genre, setGenre] = useState("1");
  const [length, setLength] = useState("Corto");
  const [openGenre, setOpenGenre] = useState(false);
  const [openLength, setOpenLength] = useState(false);

  const createCuento = async () => {
    navigation.navigate('Cuento');
  };

  const [fontsLoaded] = useFonts({
    ConcertOne: require("@expo-google-fonts/concert-one"),
  });

  const addCharacter = () => {
    if (currentCharacter.trim()) {
      setCharacters((prevCharacters) => [...prevCharacters, currentCharacter]);
      setCurrentCharacter(""); // Limpiar el campo de texto después de agregar
    }
  };

  const removeCharacter = (index: number) => {
    setCharacters(characters.filter((_, i) => i !== index));
  };

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Crea tu cuento</Text>
        <Text style={styles.label}>Agrega tus personajes</Text>
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
          <Ionicons name="add-circle-outline" size={20}/>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Temática del cuento</Text>
        <DropDownPicker
          open={openGenre}
          value={genre}
          items={[
            { label: "Sin especificar", value: "1" },
            { label: "Fantasía", value: "2" },
            { label: "Aventura", value: "3" },
            { label: "Cuento de hadas", value: "4" },
            { label: "Romance", value: "5" },
            { label: "Comedia", value: "6" },
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
            { label: "Medio", value: "Medio" },
            { label: "Largo", value: "Largo" },
          ]}
          setOpen={setOpenLength}
          setValue={setLength}
          containerStyle={[styles.dropdown, { zIndex: 500 }]}
          dropDownContainerStyle={{ zIndex: 500 }}
        />

        <View style={styles.containerButton}>
          <View style={styles.buttonWidth}>
            <Button title="Iniciar sesión" onPress={createCuento} icon='color-wand-outline' />
          </View>
        </View>

        {/* TE COMENTE EL BOTON POR PETEEEEE NO TENIA NI ANIMACION AL CLICKEAR, 
                SI TODO QUEDA BIEN PODES BORRAR LOS ESTILOS AL PEDO */}
        {/* <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent} >
            <Text onPress={createCuento} style={styles.buttonText}>Crear cuento</Text>
            <Ionicons
              name="color-wand-outline"
              size={20}
              color="white"
              style={{
                marginLeft: 10,
                transform: [{ scaleX: -1 }], // Esto espeja el ícono
              }}
            />
          </View>
        </TouchableOpacity> */}
      </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',  // Centra verticalmente
        alignItems: 'center',  // Centra horizontalmente
        padding: 20,
        height: '100%'
    },
    title: {
        fontSize: 24,
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
        flexDirection: "row",
        alignItems: "center",
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
        width: 150,
        justifyContent: 'center',  // Asegura que el contenido dentro del botón esté centrado
        alignItems: 'center',  // Alinea los elementos al centro
    },
    buttonContent: {
        flexDirection: 'row',  // Los elementos (ícono y texto) se alinearán horizontalmente
        alignItems: 'center',  // Centra verticalmente los elementos
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "ConcertOne", // Fuente personalizada
    },
    containerButton: {
      marginTop: 150,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonWidth: {
      // width: '40%'
    },
});

export default Home;









// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Keyboard,
//   TouchableWithoutFeedback,
// } from "react-native";
// import { useFonts } from "@expo-google-fonts/concert-one";

// const Home = () => {
//   const [characters, setCharacters] = useState<string[]>([]);
//   const [currentCharacter, setCurrentCharacter] = useState<string>("");

//   const [fontsLoaded] = useFonts({
//     ConcertOne: require("@expo-google-fonts/concert-one"),
//   });

//   // Función para eliminar un personaje
//   const removeCharacter = (index: number) => {
//     setCharacters(characters.filter((_, i) => i !== index));
//   };



//   return (
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Crea tu cuento</Text>

//         {/* Personajes */}
//         <Text style={styles.label}>Agrega tus personajes</Text>
//         <View style={styles.tagContainer}>
//           {characters.map((char, index) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() => removeCharacter(index)}
//               style={styles.tag}
//             >
//               <Text style={styles.tagText}>
//                 {char} ✕
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Input de personaje */}
//         <View style={styles.addCharacterContainer}>
//           <TextInput
//             style={styles.input}
//             value={currentCharacter}
//             onChangeText={setCurrentCharacter}
//             placeholder="Nombre"
//           />
//           <TouchableOpacity onPress={addCharacter} style={styles.addButton}>
//             <Text style={styles.addText}>Agregar</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Aquí puedes agregar el resto de la UI */}
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f8f8f8",
//   },
//   title: {
//     fontSize: 24,
//     fontFamily: "ConcertOne", // Fuente personalizada
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   label: {
//     fontSize: 16,
//     fontFamily: "ConcertOne", // Fuente personalizada
//     marginBottom: 10,
//   },
//   tagContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     marginBottom: 10,
//   },
//   tag: {
//     backgroundColor: "#00b894",
//     borderRadius: 20,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginRight: 5,
//     marginBottom: 5,
//   },
//   tagText: {
//     color: "#fff",
//     fontFamily: "ConcertOne", // Fuente personalizada
//   },
//   addCharacterContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 10,
//     marginRight: 10,
//     backgroundColor: "#fff",
//   },
//   addButton: {
//     padding: 10,
//     backgroundColor: "#00b894",
//     borderRadius: 8,
//   },
//   addText: {
//     color: "#fff",
//     fontFamily: "ConcertOne", // Fuente personalizada
//   },
// });

// export default Home;
