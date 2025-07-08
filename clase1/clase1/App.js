import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
  Switch,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [selectedOption, setSelectedOption] = useState('opcion1');
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [textValue, setTextValue] = useState('');

  const toggleSwitch = () => setIsSwitchOn((prev) => !prev);

  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('¡Éxito!', 'Has presionado el botón 🎉');
    }, 1500);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <StatusBar style="light" />

      <Text style={styles.title}>🚀 UI Moderna con Componentes Nativos</Text>

      <Text style={styles.label}>📷 Imagen:</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />

      <Text style={styles.label}>📝 Entrada de texto:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe aquí..."
        value={textValue}
        onChangeText={(text) => setTextValue(text)}
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>📌 Selecciona una opción:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedOption}
          onValueChange={(itemValue) => setSelectedOption(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Opción 1" value="opcion1" />
          <Picker.Item label="Opción 2" value="opcion2" />
          <Picker.Item label="Opción 3" value="opcion3" />
        </Picker>
      </View>

      <Text style={styles.label}>🖱️ Botón de acción:</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>¡Presióname!</Text>
      </TouchableOpacity>

      <Text style={styles.label}>⚠️ Alerta: (al presionar el botón)</Text>

      <Text style={styles.label}>💡 Interruptor:</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>{isSwitchOn ? 'Activo' : 'Inactivo'}</Text>
        <Switch value={isSwitchOn} onValueChange={toggleSwitch} />
      </View>

      <Text style={styles.label}>⏳ Indicador de carga:</Text>
      {isLoading && <ActivityIndicator size="large" color="#4A90E2" />}

      <Text style={styles.label}>📦 Vista con estilo:</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Este es un contenedor estilizado.</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Fin del demo 👏</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 10,
  },
  input: {
    width: '100%',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
    marginTop: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 15,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 10,
  },
  switchText: {
    fontSize: 16,
    color: '#444',
  },
  card: {
    backgroundColor: '#4A90E2',
    padding: 20,
    borderRadius: 15,
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
  },
  cardText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    marginTop: 40,
    paddingVertical: 20,
  },
  footerText: {
    color: '#666',
  },
});
