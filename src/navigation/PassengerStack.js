import React from 'react'

// React navigation imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens names
import screen from '../utils/screenNames';
import RequestRideScreen from '../screens/RequestRideScreen';

// Screens imports


const Stack = createNativeStackNavigator();

const PassengerStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={screen.ride}
      screenOptions={{headerShown: false}}
    >

      <Stack.Screen
          name={screen.ride}
          component={RequestRideScreen}   

      />
  
    </Stack.Navigator>
  )
}

export default PassengerStack