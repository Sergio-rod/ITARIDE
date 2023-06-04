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
import ChatScreen from '../screens/ChatScreen';

import RequestRideScreen from '../screens/RequestRideScreen';
import RequestTripScreen from '../screens/RequestTripScreen';
import PassengerScreen from '../screens/PassengerScreen';
import DriverScreen from '../screens/DriverScreen';
import AccountSettings from '../screens/AccountSettings';
import NewChatScreen from '../screens/NewChatScreen';


const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  return (

    <Tab.Navigator initialRouteName={screen.home} screenOptions={{ headerShown: true }}>


        <Tab.Screen
          name={screen.homeStack}
          component={HomeScreen}
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

        {/* <Tab.Screen
          name={screen.chat}
          component={ChatScreen}
          options={{
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        /> */}


    </Tab.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>

      <HomeStack.Group>
        <HomeStack.Screen
          name="Principal"
          component={BottomTabNavigator}
          options={{ headerShown: false }} //headerLeft: null
        />

        <HomeStack.Screen name={screen.ride} component={RequestRideScreen} />
        <HomeStack.Screen name={screen.trip} component={RequestTripScreen} />
        <HomeStack.Screen name={screen.passenger} component={PassengerScreen} />
        <HomeStack.Screen name={screen.driver} component={DriverScreen} />
        <HomeStack.Screen name={screen.chat} component={ChatScreen} />
        <HomeStack.Screen name={screen.accSettings} component={AccountSettings} />
      </HomeStack.Group>


      {/*SegundoNivel*/}

      <HomeStack.Group screenOptions={{presentation:'containedModal', headerShown:true}} >


      <HomeStack.Screen name={screen.newChat} component={NewChatScreen} />


      </HomeStack.Group>




    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
