import { StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Register from '../login/login-up';
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/FontAwesome5";
import CustonDrawer from '../../components/home/custon-drawer';
import BottomTabNavigator from './bottom-tab-navigator';
import { normal } from '../../constants/color';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustonDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: normal.primary2,
      }}
    >
      <Drawer.Screen 
        name="Welcom" 
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Home',
          drawerIcon: () => (
            <Icon name='home' size={20} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="statistique" 
        component={Register} 
        options={{
          drawerLabel: 'statistique',
          drawerIcon: () => (
            <Icon name='bar-chart' size={20} /> 
          ),
        }} 
      />
      <Drawer.Screen 
        name="Modifier Profil" 
        component={Register} 
        options={{
          drawerLabel: 'Modifier Profil',
          drawerIcon: () => (
            <Icons name='user-edit' size={20} /> 
          ),
        }} 
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

const styles = StyleSheet.create({});
