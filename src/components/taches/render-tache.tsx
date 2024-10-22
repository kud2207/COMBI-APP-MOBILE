import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RenderTache() {
  return (
    <View style={styles.contenaire}>
      <Text style={styles.title}>Today's Taches</Text>

      <View style={styles.contenaireTache}>
        {/* Left Section */}
        <View style={styles.gaucheTache}>
          <View style={styles.iconeTache}>
            <Icon name="heartbeat" size={24} color="#3498db" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.tacheTitle}>Tache Ultime</Text>
            <Text style={styles.tacheSubtitle}>Realisation de the dev app</Text>
          </View>
        </View>

        {/* Right Section */}
        <View style={styles.droiteTache}>
          <Text style={styles.point}><Icon name="check-circle" size={15} color="#3498db" />
          </Text>
        </View>
      </View>
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
  },
  contenaireTache: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  gaucheTache: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconeTache: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eaf2f8',
    padding: 10,
    borderRadius: 10,
    height:60,
    width:60
  },
  textContainer: {
    flexDirection: 'column',
    alignItems:'baseline',
    justifyContent:'space-between',
    height:47
  },
  tacheTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tacheSubtitle: {
    color: '#7f8c8d',
    fontSize: 12,
  },
  droiteTache: {
    backgroundColor: '#f9e79f',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f4d03f',
    alignItems: 'center',
    width:30
  
  },
  point: {
    fontSize: 15,
    fontWeight: 'bold',
    padding:5
  },
});
