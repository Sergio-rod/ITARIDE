import React from 'react'

// React navigation imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens names
import screen from '../utils/screenNames';
import RequestTripScreen from '../screens/RequestTripScreen';

// Screens imports


const Stack = createNativeStackNavigator();

const DriverStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={screen.trip}
      screenOptions={{headerShown: false}}
    >
   

      <Stack.Screen
          name={screen.trip}
          component={RequestTripScreen}   

      />

    </Stack.Navigator>
  )
}

export default DriverStack