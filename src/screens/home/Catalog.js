import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { UseProuductContext } from '../../context/ProductsApi'
import { Url } from '../../constants/ApiUrl'
import { UseTheme } from '../../context/ThemeContext'



export default function Catalog() {
  const {lightMode} =UseTheme()

  const {productData,ProductApiCall} = UseProuductContext()
  
  useEffect(()=>{
    ProductApiCall(Url)
  },[])

  
  return (
  <SafeAreaView style={{
    flex: 1,
    backgroundColor: lightMode.bg,
    
  }}>

  </SafeAreaView>
  )
}

const styles = StyleSheet.create({})