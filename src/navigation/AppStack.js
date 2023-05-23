import React from 'react'

// React navigation imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens names
import screen from '../utils/screenNames';

// Screens imports
import AuthenticatedScreen from '../screens/AuthenticatedScreen';
import StartScreen from '../screens/StartScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();


function AlreadyLoged(){
  return(
    <Stack.Navigator>

      <Stack.Screen name ={screen.chat} component={ChatScreen}></Stack.Screen>

    </Stack.Navigator>
  )
}
function NotLogged(){
  return(
    <Stack.Navigator>
      
    </Stack.Navigator>
  )
}



const AppStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={screen.start}
      screenOptions={{headerShown: false}}
    >
   

      <Stack.Screen
          name={screen.start}
          component={StartScreen}   

      />
      <Stack.Screen
          name={screen.signUp}
          component={SignUpScreen}   

      />
         <Stack.Screen
        name={screen.authenticated}
        component={AuthenticatedScreen}   

      />


    </Stack.Navigator>
  )
}

export default AppStack