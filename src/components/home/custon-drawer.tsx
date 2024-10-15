import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from "react-native-vector-icons/Ionicons";

const CustonDrawer=(props:any)=> {
  return (
<View style={{flex:1}}>
<DrawerContentScrollView {...props}
contentContainerStyle={{backgroundColor:'#eee'}}
>
  <ImageBackground source={require('../../assets/images/fontecran.jpg') }
    style={{height:300}}
    resizeMode="cover"
  >


    <Image source={require("../../assets/images/ulrich.jpeg")}  
    style={{height:100 , width:100,borderRadius:50}}
    />
   <Text style={{fontSize:20, color:'white'}}>Kageu Ulrich</Text>
   <Text style={{fontSize:8, color:'white'}}>500 count</Text>
  </ImageBackground>
  <View style={{flex:1, backgroundColor:'#fff', paddingTop:10}} >
    <DrawerItemList {...props} />
  </View>
  </DrawerContentScrollView>
<View style={{padding:30, borderTopWidth:1, borderTopColor:'red'}}>
<TouchableOpacity style={{paddingVertical:13}}>
    <View style={{flexDirection:'row', alignItems:'center'}}>
      <Icon name='log-out-outline' size={20} />
      <Text>Output</Text>
    </View>
  </TouchableOpacity>
</View>
</View>
  )
}

const styles = StyleSheet.create({})
export default  CustonDrawer