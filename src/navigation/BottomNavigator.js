import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screen from '../utils/screenNames';
import SettingsScreen from '../screens/SettingsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import HomeScreen from '../screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (

    <Tab.Navigator initialRouteName={screen.home}>

      <Tab.Screen 
      name={screen.home} 
      component={HomeScreen} 
      options={{
        tabBarIcon: ({focused,color,size}) => (
          <Ionicons name={focused ? 'home': 'home-outline'} size={size} color={color} ></Ionicons>
        )
      }}
      />


      <Tab.Screen 
      name={screen.settings} 
      component={SettingsScreen} 
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? 'settings' : 'settings-outline'} size={size} color={color} />
        ),
      }}
      />


      <Tab.Screen 
      name={screen.history} 
      component={HistoryScreen} 
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? 'time' : 'time-outline'} size={size} color={color} />
        ),
      }} 
      />


    </Tab.Navigator>

  );
}

export default BottomTabNavigator;
