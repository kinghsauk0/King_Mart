import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { UseProuductContext } from '../../context/ProductsApi'
import { Url } from '../../constants/ApiUrl'
import { UseTheme } from '../../context/ThemeContext'



export default function Favoritos() {
  const {lightMode} =UseTheme()

  const {productData,ProductApiCall} = UseProuductContext()
  
  useEffect(()=>{
    ProductApiCall(Url)
  },[])

  
  return (
  <SafeAreaView style={{
    flex: 1,
    backgroundColor: lightMode.bg,
    width: '90%',
    alignSelf: 'center',
  }}>
  <Text style={{
    marginTop: 50,
    color: lightMode.text,
    fontSize: 30,
    fontWeight: '900'
  }}>
    DisCover prosucts
  </Text>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({})