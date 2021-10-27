import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screen/Login";
import ProfileScreen from "./screen/Profile";

const Stack = createNativeStackNavigator();

export default function App(){

  const config = {
    animation: 'timing',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}