import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginIn from '../login/login-in';
import Register from '../login/login-up';
import Icon from "react-native-vector-icons/Ionicons";
import CustonDrawer from '../../components/home/custon-drawer';
import BottomTabNavigator from './bottom-tab-navigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    drawerContent={props => <CustonDrawer {...props} />}
    screenOptions={{headerShown: true,

        drawerActiveBackgroundColor:'#aa18ea'
    }}

    >
      <Drawer.Screen name="Feed" component={BottomTabNavigator}
      
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