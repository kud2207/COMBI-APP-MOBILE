import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { NavigationPropsTache } from '../../types/types';

export default function AddTache() {
  const [category, setCategory] = useState('');
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');

  const navigation = useNavigation<NavigationPropsTache>();

  const handleAddTask = () => {
    // Handle task submission logic here
    console.log('Task added:', { category, taskName, description, color });
  };

  return (
    
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.replace("tache")}>
        <Text style={styles.backButtonText}>Retour</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Add New Task</Text>

      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={(text) => setCategory(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Task Name"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />

      <TextInput
        style={[styles.input, styles.description]}
        placeholder="Description"
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Color (e.g., #f1948a)"
        value={color}
        onChangeText={(text) => setColor(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f9fc',
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#dcdcdc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  backButtonText: {
    color: '#333',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 5,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  description: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
