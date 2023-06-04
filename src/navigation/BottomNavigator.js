import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screen from '../utils/screenNames';
import SettingsScreen from '../screens/SettingsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import HomeScreen from '../screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen';
import ChatsScreen from '../screens/ChatsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import ChatScreen from '../screens/ChatScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={screen.home} screenOptions={{ headerShown: true }}>
      <Tab.Screen
        name={screen.homeStack}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={focused ? '#024959' : 'gray'}
            />
          ),
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            color: '#024959',
          },
        }}
      />
      <Tab.Screen
        name={screen.chats}
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
              size={size}
              color={focused ? '#024959' : 'gray'}
            />
          ),
          tabBarLabel: 'Chats',
          tabBarLabelStyle: {
            color: '#024959',
          },
        }}
      />
      <Tab.Screen
        name={screen.settings}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'settings' : 'settings-outline'}
              size={size}
              color={focused ? '#024959' : 'gray'}
            />
          ),
          tabBarLabel: 'Settings',
          tabBarLabelStyle: {
            color: '#024959',
          },
        }}
      />
      <Tab.Screen
        name={screen.history}
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'time' : 'time-outline'}
              size={size}
              color={focused ? '#024959' : 'gray'}
            />
          ),
          tabBarLabel: 'History',
          tabBarLabelStyle: {
            color: '#024959',
          },
        }}
      />
      <Tab.Screen
        name={screen.chat}
        component={ChatScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
