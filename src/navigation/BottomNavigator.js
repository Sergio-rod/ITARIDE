import React, { useEffect, useState } from 'react';
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
import { Stack, View } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { getFirebaseApp } from '../utils/firebaseHelper';
import { child, get, getDatabase, off, onValue, ref } from 'firebase/database';
import { setChatsData } from '../../store/chatSlice';
import { ActivityIndicator } from 'react-native';
import colors from '../../constants/colors';
import commonStyles from '../../constants/commonStyles';
import { setStoredUsers } from '../../store/userSlice';

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


const StackNavigator = () =>{

return(
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

)

}


const MainNavigator = (props) => {

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const userData = useSelector(state => state.auth.userData);
  // console.log("userData",userData)
  // console.log("userId", userData.userId)

  // console.log("Id de usuario",userData.userId)

  const storedUsers = useSelector(state => state.users.storedUsers);
  // console.log("stored user desde bottom ",storedUsers)

  useEffect(() => {
    console.log("Subscribing to firebase listeners");

    const app = getFirebaseApp();
    const dbRef = ref(getDatabase(app));
    const userChatsRef = child(dbRef, `userChats/${userData.userId}`);
    const refs = [userChatsRef];

    // console.log("userChats ref",userChatsRef)

    onValue(userChatsRef, (querySnapshot) => {
      // console.log("userChats snap ",querySnapshot.val());

      const chatIdsData = querySnapshot.val() || {};
      const chatIds = Object.values(chatIdsData);
      // console.log("chatIds",chatIds);

      const chatsData = {};
      let chatsFoundCount = 0;

      for (let i = 0; i < chatIds.length; i++) {
        const chatId = chatIds[i];
        const chatRef = child(dbRef, `chats/${chatId}`);
        refs.push(chatRef);
        

        onValue(chatRef, (chatSnapshot) => {
          chatsFoundCount++;

          console.log("chat ref",chatRef)

          // console.log("chatsnapshotval ",chatSnapshot.val())
          
          const data = chatSnapshot.val();
          // console.log("data del snap",data)

          if (data) {
            data.key = chatSnapshot.key;

            data.users.forEach(userId => {
              if (storedUsers[userId]) return;

              const userRef = child(dbRef, `users/${userId}`);
              console.log("link del usuario",userRef)

              console.log("Valor de get ref: ",get(userRef));


              get(userRef)
              .then(userSnapshot => {
                console.log("Y AQUI FALLA",userSnapshot)
                const userSnapshotData = userSnapshot.val();
                console.log("snapshot",userSnapshotData)
                dispatch(setStoredUsers({ newUsers: { userSnapshotData } }))
              })

              refs.push(userRef);
            })

            chatsData[chatSnapshot.key] = data;
          }

          if (chatsFoundCount >= chatIds.length) {
            dispatch(setChatsData({ chatsData }));
            setIsLoading(false);
          }
        })

        if (chatsFoundCount == 0) {
          setIsLoading(false);
        }
      }

    })

    return () => {
      console.log("Unsubscribing firebase listeners");
      refs.forEach(ref => off(ref));
    }
  }, []);

  if (isLoading) {
    <View style={commonStyles.center}>
      <ActivityIndicator size={'large'} color={colors.primary} />
    </View>
  }


  return (
    <StackNavigator />
  );
};

export default MainNavigator;