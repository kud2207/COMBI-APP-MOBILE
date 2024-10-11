import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginIn from '../login/login-in';
import Register from '../login/login-up';
import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    >
      <Drawer.Screen name="Feed" component={LoginIn}
      
      options={{
        drawerLabel: 'Home',
        drawerIcon: ()=>(
            <Icon name='home' size={20} />
        )
      }}
      />
      <Drawer.Screen name="Article" component={Register} 
         options={{
            drawerLabel: 'People',
            drawerIcon: ()=>(
                <Icon name='people' size={20} />
            )
          }}/>
        
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})