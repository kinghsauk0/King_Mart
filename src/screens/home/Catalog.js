import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { UseProuductContext } from '../../context/ProductsApi'
import { Url } from '../../constants/ApiUrl'



export default function Catalog() {

  const {productData,ProductApiCall} = UseProuductContext()
  
  useEffect(()=>{
    ProductApiCall(Url)
  },[])

  
  return (
   <View>
    <Text>CataLog</Text>
   </View>
  )
}

const styles = StyleSheet.create({})