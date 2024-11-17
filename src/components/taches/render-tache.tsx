import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSQLiteContext } from 'expo-sqlite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../../types/types';
import { Divider } from 'react-native-paper';

export default function RenderTache() {
  const db = useSQLiteContext();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true); // Loading state

  const getUserTasks = async () => {
    const storageNumberUser = await AsyncStorage.getItem('number');
    try {
      if (storageNumberUser !== null) {
        const userTasks = await db.getAllSync(
          'SELECT tasks.* FROM users INNER JOIN tasks ON users.numeroTelephone = tasks.idUser',
          [storageNumberUser]
        );
        const recupValueSQLite = JSON.parse(JSON.stringify(userTasks));
        console.log(recupValueSQLite);
        setTasks(recupValueSQLite); 
      }
    } catch (error: any) {
      console.log('Error in getUserTasks', error.message);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getUserTasks();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text>Loading tasks...</Text>
      </View>
    );
  }

  return (
    <View style={styles.contenaire}>
      <Text style={styles.title}>Today's Taches</Text>
      <Divider style={{marginTop:3}}/>

      {tasks.length === 0 ? (
        <Text style={styles.noTasksText}>No tasks available</Text> // Message when no tasks
        
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {tasks.map((task) => (
            <View key={task.id} style={styles.contenaireTache}>
              {/* Left Section */}
              <View style={styles.gaucheTache}>
                <View style={[styles.iconeTache, { backgroundColor: task.selectedColors }]}>
                  <Icon name="heartbeat" size={24} color="#3498db" />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.tacheTitle}>{task.taskName}</Text> 
                  <Text style={styles.tacheSubtitle}>{task.description}</Text> 
                </View>
              </View>

              {/* Right Section */}
              <View style={{ flexDirection: 'row', gap: 8 }}>
                <View style={styles.droiteTache}>
                  <Text style={styles.point}><Icon name="check-circle" size={15} color="#3498db" /></Text>
                </View>
                <View style={styles.droiteTacheDelete}>
                  <Text style={styles.point}><Icon name="trash" size={15} color="#e74c3c" /></Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenaire: {
    flex: 1,
    backgroundColor: '#f8f9f9',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingTop: '6%',
    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    shadowColor: '#000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9f9',
  },
  noTasksText: {
    fontSize: 18,
    color: '#7f8c8d',
    textAlign: 'center',
    marginTop: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  contenaireTache: {
    flexDirection: 'row',
    marginTop: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  gaucheTache: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconeTache: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    height: 60,
    width: 60,
    elevation: 4,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    height: 47,
  },
  tacheTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tacheSubtitle: {
    color: '#7f8c8d',
    fontSize: 12,
    width: 170,
    height: 30,
    overflow: 'hidden', // Hide overflow if it exceeds
  },
  droiteTache: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#f4d03f',
    alignItems: 'center',
    width: 30,
    elevation: 2,
  },
  droiteTacheDelete: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e74c3c',
    alignItems: 'center',
    width: 30,
  },
  point: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
  },
});
