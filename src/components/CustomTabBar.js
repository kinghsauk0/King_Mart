// CustomTabBar.js

import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { UseTheme } from '../context/ThemeContext';


const CustomTabBar = ({ state, descriptors, navigation }) => {
    const {lightMode} =UseTheme()
  const tabIcons = {
   Catalog: require("../assets/category.png"), // replace with actual image paths
    Search: require("../assets/search.png"),
    Favoritos: require('../assets/love.png'),
    Profile: require('../assets/user.png'), // replace with actual image paths
    // Add more images for additional screens
  };

  return (
    <View style={{ flexDirection: 'row', height: 80, backgroundColor: lightMode.text, }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.5}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              source={tabIcons[route.name]}
              style={{ width: 24, height: 24, marginBottom: 4, tintColor: isFocused ? '#FF69B4' : lightMode.bg }}
            />
            <Text style={{ color: isFocused ? 'pink' : lightMode.bg }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
