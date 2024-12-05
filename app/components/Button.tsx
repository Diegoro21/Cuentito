import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, GestureResponderEvent, Alert} from 'react-native';

interface ButtonProps {
    onPress: (event: GestureResponderEvent) => void; // Tipo para el evento onPress
    title: string; // Tipo para el texto del botón
    color?: string; // Color del backgroundColor del boton
    colortext?: string; // Color del texto
    underlayColor?: string; // Color del hover al clickear
    borderColor?: string;     // Color del borde
    hasBorder?: boolean;      // Flag para mostrar o no el borde
    icon?: any;     // icono
  }

export default function Button({ onPress, title, color, colortext, underlayColor, hasBorder, borderColor, icon }: ButtonProps) {
    return (
      <TouchableHighlight
        style={[styles.buttonPrimary, { 
            backgroundColor: color || '#40A69F', 
            borderColor: hasBorder ? (borderColor || '#000') : 'transparent',
            borderWidth: hasBorder ? 1 : 0 
        }
        ]}
        underlayColor={underlayColor || '#004085'}
        onPress={onPress} // Ejecuta la función pasada por props
      >
        <View style={styles.containerButton}>
          <Text style={[styles.buttonText, { color: colortext || '#fff' }]}>{title}</Text>
          {icon && (
            <Ionicons
              name= {icon}
              size={20}
              color="white"
              style={{
                marginLeft: 10,
                transform: [{ scaleX: -1 }], // Esto espeja el ícono
              }}
            />
          )}
        </View>
      </TouchableHighlight>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  buttonPrimary: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerButton: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
