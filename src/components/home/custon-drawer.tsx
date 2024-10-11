import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustonDrawer=props=> {
  return (
  <DrawerContentScrollView {...props}>
    <Image source={require("../../assets/images/background.png")}  />
  <View style={styles.drawerListWrapper}>
    <DrawerItemList {...props} />
  </View>
  </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
    userImg:{
        width: 110,
        height:110,
        borderRadius:110/2,
        position:'absolute',
        borderWidth:4,
        borderColor:'#fff'
    },
    drawerListWrapper:{
        margin:65
    }
})
export default  CustonDrawer