import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Catalog from '../../screens/home/Catalog'
import Search from '../../screens/home/Search'
import Favoritos from '../../screens/home/Favoritos'
import Profile from '../../screens/home/Profile'




const  Drawer= createDrawerNavigator()
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Catalog" component={Catalog} />
        <Drawer.Screen name="Search" component={Search} />
        <Drawer.Screen name="Favritos" component={Favoritos} />
        <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})