import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AboutScreen from './screens /AboutScreen';
import ContactScreen from './screens /ContactScreen';
import HomeScreen from './screens /HomeScreen';

const Tab = createMaterialBottomTabNavigator();

export default function RootNavigation() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="AboutScreen" component={AboutScreen} />
        <Tab.Screen name="ContactScreen" component={ContactScreen} />
      </Tab.Navigator>
    );
  }

  
  