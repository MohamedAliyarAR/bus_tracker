import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return( 
  <NavigationContainer>
  <Stack.Navigator>
    {/* <Stack.Screen name="LOGIN" component={LoginScreen} /> */}
    <Stack.Screen name="HOME SCREEN" component={HomeScreen} />
    <Stack.Screen name="MAP SCREEN" component={MapScreen}/>
    
    
  </Stack.Navigator>
</NavigationContainer>
  )
}
