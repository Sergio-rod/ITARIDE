import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screen from '../utils/screenNames';
import SettingsScreen from '../screens/SettingsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import HomeScreen from '../screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (

    <Tab.Navigator initialRouteName={screen.home}>

      <Tab.Screen
        name={screen.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (

            <Ionicons 
            name={focused ? 'home' : 'home-outline'}
            size={size} 
            color={focused ? '#024959' : 'gray'} ></Ionicons>
          ),
          tabBarLabel: 'Home',
          tabBarLabelStyle:{
            color: '#024959'
          }
        }}
      />
      <Tab.Screen
        name={screen.profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons 
            name={focused ? 'person' : 'person-outline'} 
            size={size} 
            color={focused ? '#024959' : 'gray'} />
          ),
          tabBarLabel: 'Profile',
          tabBarLabelStyle:{
            color: '#024959'
          }
          
        }}
      />


      <Tab.Screen
        name={screen.settings}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name={focused ? 'settings' : 'settings-outline'} 
            size={size} 
            color={focused ? '#024959' : 'gray'} />
          ),
          tabBarLabel: 'Settings',
          tabBarLabelStyle:{
            color: '#024959'
          }

        }}
      />


      <Tab.Screen
        name={screen.history}
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name={focused ? 'time' : 'time-outline'}
             size={size} 
             color={focused ? '#024959' : 'gray'} />
          ),
          tabBarLabel: 'History',
          tabBarLabelStyle:{
            color: '#024959'
          }
        }}
      />


    </Tab.Navigator>

  );
}

export default BottomTabNavigator;
