import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ navigation }) => {

  useEffect(()=>{
   setTimeout(() => {
    navigation.replace("Login")
   }, 2000);
  },[])
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor='transparent'/>
        <Text  style={styles.name}>King</Text>
        <Text>Mart</Text>
    </SafeAreaView>
  )
}















export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  name: {
    fontSize: 30,
    fontWeight: '900',
    fontStyle: 'italic',
    color: "#000000"
  }
})