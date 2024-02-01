import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { UseProuductContext } from '../../context/ProductsApi'
import { UseTheme } from '../../context/ThemeContext'
import CatalogButton from '../../components/CatalogButton'
import CatalogList from '../../components/CatalogList'



export default function Catalog() {
 
  const { lightMode } = UseTheme();
  
 
  
  return (
    
  <SafeAreaView style={{
    flex: 1,
    backgroundColor: lightMode.bg,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'column,'
  }}>
  <Text style={{
    marginTop: 50,
    color: lightMode.text,
    fontSize: 30,
    fontWeight: '900'
  }}>
    DisCover prosucts
  </Text>
  <ScrollView
  horizontal={true}
  style={{
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
  }}
  >
  <CatalogButton buttonText="men's"/>
  <CatalogButton buttonText="jewelery"/>
  <CatalogButton buttonText="electronics"/>
  <CatalogButton buttonText="women's"/>
  </ScrollView>
  <View style ={{
    backgroundColor : 'black',
    flex : 1,
  }}>
    <CatalogList/>
  </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({})