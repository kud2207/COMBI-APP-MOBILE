import { View, Text } from 'react-native'
import React from 'react'
import Tache from './tache';
import AddTache from './add-tache';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const TacheHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="tache" component={Tache} options={{headerShown:false}} />
      <Stack.Screen name="addTache" component={AddTache}  options={{headerShown:false}} />
    </Stack.Navigator>  )
}

export default TacheHome
