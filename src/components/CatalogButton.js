import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { UseTheme } from "../context/ThemeContext";
import CatalogList from "./CatalogList";
import { UseProuductContext } from "../context/ProductsApi";
import {Url} from "../constants/ApiUrl"



const CatalogButton = ({ buttonText }) => {
  const {ProductApiCall} = UseProuductContext()
  const { lightMode } = UseTheme();
  const hadeleApi = () =>{
    ProductApiCall(Url)
  }
  return (
    <>
    <View
      style={{
        flexDirection: "row",
        height: 50,
        alignSelf: 'center,'
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: lightMode.text,
          height: 50,
          
          padding: 10,
          borderRadius: 10,
        }}
        onPress={hadeleApi}
      >
        <Text style={{ color: lightMode.bg }}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

export default CatalogButton;

const styles = StyleSheet.create({});
