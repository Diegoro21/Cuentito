import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Alert } from 'react-native';
import Button from '../components/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    // Validación del email
    if (!email.trim()) {
      newErrors.email = 'El campo de email no puede estar vacío.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'El email no es válido.';
    }

    // Validación de la contraseña
    if (!password.trim()) {
      newErrors.password = 'El campo de contraseña no puede estar vacío.';
    }

    setErrors(newErrors);

    // Si no hay errores, el formulario es válido
    if (Object.keys(newErrors).length === 0) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    Alert.alert('Formulario enviado', `Email: ${email}\nContraseña: ${password}`);
  };

  return (
    <View style={styles.containerInputs}>
        <Text style={styles.textTitle}>Inicia sesión en tu cuenta</Text>

      <TextInput
        style={[styles.input, errors.email && styles.inputError, focusedInput === 'email' && styles.inputFocused]}
        placeholder="Username"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        onFocus={() => setFocusedInput('email')}
        onBlur={() => setFocusedInput(null)}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        style={[styles.input, errors.password && styles.inputError, focusedInput === 'password' && styles.inputFocused]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        onFocus={() => {setFocusedInput('password');}}
        onBlur={() => setFocusedInput(null)}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

    <View style={styles.containerText}>
      <Text style={[styles.textRegister, styles.textWidth]}>¿Olvidaste tu contraseña?</Text>
      <Text>¿No tenes cuenta? <Text style={styles.textRegister}>Registrate.</Text></Text>
    </View>

      <View style={styles.containerButton}>
        <View style={styles.buttonWidth}>
          <Button title="Iniciar sesión" onPress={validateForm} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containerInputs: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f8f9fa',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    // borderColor: '#4E46B4',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: '#dc3545',
  },
  errorText: {
    color: '#dc3545',
    marginBottom: 10,
    fontSize: 14,
  },
  containerButton: {
    marginTop: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWidth: {
    width: '40%'
  },
  textTitle:{
    marginBottom: 20,
    fontSize: 40,
    fontWeight: '400',
    color: '#000000'
  },
  inputFocused: {
    borderWidth: 2,
    borderColor: '#4E46B4',
  },
  containerText:{
    marginTop: 15
  },
//   marginText:{
//     marginTop: 50
//   },
  textRegister:{
    color: '#000000',
    fontSize: 14,
    fontWeight: '700',
    width: '100%'
  },
  textWidth: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom:10
  }
});
