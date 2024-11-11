import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationPropsTache } from '../../types/types';
import Icon from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSQLiteContext } from 'expo-sqlite';

  //connected SQLite
  //const db = useSQLiteContext()

// Catégories et couleurs disponibles
const categoriesOptions = ['Travail', 'Personnel', 'Urgent', 'Études', 'other'];
const colorOptions = ['#3498db', '#f1948a', '#52be80', '#f1c40f', '#212f3d'];

export default function AddTache() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [taskName, setTaskName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const navigation = useNavigation<NavigationPropsTache>();

  // Gestion de la sélection des catégories
  const toggleCategory = (category: string) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((item) => item !== category);
      } else if (prevSelected.length < 1) {
        return [...prevSelected, category];
      }
      return prevSelected;
    });
  };

  // Gestion de la sélection des couleurs
  const toggleColor = (color: string) => {
    setSelectedColors((prevSelected) => {
      if (prevSelected.includes(color)) {
        return [];
      } else {
        return [color];
      }
    });
  };

  const handleAddTask = async() => {
try {
  const selectedCategoriesSTRING = selectedCategories.join(', ')
  const selectedColorsSTRING = selectedColors.join(', ')
  console.log('Tâche ajoutée :', { selectedCategories, taskName, description, selectedColors });

    const storageNumberUser = await AsyncStorage.getItem('number');
    if (storageNumberUser !== null) {
      console.log('staore number',storageNumberUser )
    }
 

  // Afficher le toast personnalisé
  Toast.show({
    type: 'success',
    text1: 'Tache enregistréavec succès!',
    text2: `${taskName} : ${description}`,
    position: 'bottom',
    visibilityTime: 2000, 
  });
  
} catch (error:any) {
  console.log('Error DE SAVE TACHE', error.message)
}
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.replace("tache")}>
        <Text style={styles.backButtonText}>
          <Icon name='back' size={20} />
        </Text>
      </TouchableOpacity>

      <Text style={styles.title}>Nouvelle Tâche   <Entypo name="add-to-list" size={30} color={'#3498db'} /></Text>

      <TextInput
        style={styles.input}
        placeholder="Nom de la tâche"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />

      <Text style={styles.sectionTitle}>Catégories </Text>
      <View style={styles.optionsContainer}>
        {categoriesOptions.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.optionButton,
              selectedCategories.includes(category) && styles.optionButtonSelected
            ]}
            onPress={() => toggleCategory(category)}
          >
            <Text style={styles.optionText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Couleurs </Text>
      <View style={styles.optionsContainer}>
        {colorOptions.map((color) => (
          <TouchableOpacity
            key={color}
            style={[
              styles.colorButton,
              { backgroundColor: color },
              selectedColors.includes(color) && styles.colorButtonSelected
            ]}
            onPress={() => toggleColor(color)}
          />
        ))}
      </View>

      <TextInput
        style={[styles.input, styles.description]}
        placeholder="Description"
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <View style={{ flex: 1, alignItems: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Save La Tâche  <Entypo name='save' size={20} /></Text>
        </TouchableOpacity>
        <Toast />
      </View>
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
    padding: 5,
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    height: 40,
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
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  optionButton: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 5,
  },
  optionButtonSelected: {
    backgroundColor: '#3498db',
  },
  optionText: {
    color: '#333',
    fontSize: 16,
  },
  colorButton: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 20,
    borderWidth: 4.5,
    borderColor: '#f7f9fc',
  },
  colorButtonSelected: {
    borderColor: '#fff',
    borderWidth: 3,

  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
    width: 250

  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  },
});
