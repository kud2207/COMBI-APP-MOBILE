import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";
import Notif from './notif';
import CustonDrawer from '../../components/home/custon-drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigatorNutton =() => {
  return (
    <Drawer.Navigator
    drawerContent={props => <CustonDrawer {...props} /> }
    screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#b666d2',
        drawerActiveTintColor:'#fff',
        drawerLabelStyle:{
            marginLeft:-20
        }
    }}
    >
      <Drawer.Screen name="Feed" component={Notif}
       options={{title:"Feed", drawerIcon:({focused, color, size})=>(
        <Icon name="home" size={18} color={color} />
       )}}
      />
            <Drawer.Screen name="setting" component={Notif}
       options={{title:"Feed", drawerIcon:({focused, color, size})=>(
        <Icon name="home" size={18} color={color} />
       )}}
      />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})

export default DrawerNavigatorNutton 