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
import LoginScreen from '../screens/LoginScreen';
import SwitchLoginSignin from '../components/SwitchLoginSignin';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();




const AppStack = () => {


  const isAuth = useSelector(state => state.auth.token !== null && state.auth.token !== "");
  return (
    
    <Stack.Navigator 
      initialRouteName={isAuth ? screen.authenticated : screen.start}
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
          name={screen.login}
          component={LoginScreen}   

      />
         <Stack.Screen
        name={screen.authenticated}
        component={AuthenticatedScreen}   

      />
           <Stack.Screen
        name={screen.switchScreens}
        component={SwitchLoginSignin}   

      />


    </Stack.Navigator>
  )
}

export default AppStack