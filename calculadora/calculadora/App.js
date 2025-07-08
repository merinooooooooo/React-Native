import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [respuesta, setRespuesta] = useState('');

  const Calcular = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const suma = num1 + num2;
    setRespuesta(suma);
  };

  const CalcularResta = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const resta = num1 - num2;
    setRespuesta(resta);
  };

  const CalcularMulti = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const mult = num1 * num2;
    setRespuesta(mult);
  };

  const CalcularDivi = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    if (num2 !== 0) {
      const divi = num1 / num2;
      setRespuesta(divi);
    } else {
      setRespuesta("Error: división por 0");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.titulo}>🔢 Calculadora Neon</Text>

      <View style={styles.containerInput}>
        <Text style={styles.label}>Número 1:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa un número"
          placeholderTextColor="#888"
          keyboardType="numeric"
          onChangeText={(text) => setNumero1(text)}
          value={numero1}
        />
      </View>

      <View style={styles.containerInput}>
        <Text style={styles.label}>Número 2:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa otro número"
          placeholderTextColor="#888"
          keyboardType="numeric"
          onChangeText={(text) => setNumero2(text)}
          value={numero2}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.green]} onPress={Calcular}>
          <Text style={styles.buttonText}>➕</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.pink]} onPress={CalcularResta}>
          <Text style={styles.buttonText}>➖</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blue]} onPress={CalcularMulti}>
          <Text style={styles.buttonText}>✖</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orange]} onPress={CalcularDivi}>
          <Text style={styles.buttonText}>➗</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.resultado}>🧮 Resultado: {respuesta}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d0d0d',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 34,
    color: '#39FF14',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: 280,
    height: 45,
    borderColor: '#39FF14',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  containerInput: {
    width: '100%',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
    flexWrap: 'wrap',
  },
  button: {
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#fff',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    fontSize: 28,
    color: '#fff',
  },
  green: {
    backgroundColor: '#00FF7F',
  },
  pink: {
    backgroundColor: '#FF1493',
  },
  blue: {
    backgroundColor: '#1E90FF',
  },
  orange: {
    backgroundColor: '#FFA500',
  },
  resultado: {
    marginTop: 40,
    fontSize: 24,
    color: '#00FFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
