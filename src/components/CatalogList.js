import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { UseProuductContext } from '../context/ProductsApi'

export default function CatalogList() {
    const {productData}=UseProuductContext()

    useEffect(()=>{
        console.log(productData)
    },[productData])
  return (
    <View>
      <Text>CatalogList</Text>
    </View>
  )
}

const styles = StyleSheet.create({})