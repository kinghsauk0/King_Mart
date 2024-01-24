import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Catalog from '../../screens/home/Catalog'
import Search from '../../screens/home/Search'

import Profile from '../../screens/home/Profile'
import CustomTabBar from '../../components/CustomTabBar'
import Favoritos from '../../screens/home/Favoritos'


const Tab = createBottomTabNavigator()
const color = "red"
export default function ButtomTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={(props) => <CustomTabBar {... props} />}>
        <Tab.Screen
         name="Catalog"
        component={Catalog} />
        <Tab.Screen name='Favoritos' component={Favoritos}/>
        <Tab.Screen
         name="Search" component={Search} />
        <Tab.Screen
         name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})