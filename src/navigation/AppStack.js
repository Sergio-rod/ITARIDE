import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import screen from '../utils/screenNames';
import AuthenticatedScreen from '../screens/AuthenticatedScreen';
import StartScreen from '../screens/StartScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/LoginScreen';
import SwitchLoginSignin from '../components/SwitchLoginSignin';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const isAuth = useSelector((state) => state.auth.token !== null && state.auth.token !== '');
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);

  useEffect(() => {
    if (isAuth) {
      navigation.navigate(screen.authenticated);
    } else if (!isAuth && didTryAutoLogin) {
      navigation.navigate(screen.switchScreens);
    }
  }, [isAuth, didTryAutoLogin, navigation]);

  return (
    <Stack.Navigator initialRouteName={screen.start} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screen.start} component={StartScreen} />
      <Stack.Screen name={screen.signUp} component={SignUpScreen} />
      <Stack.Screen name={screen.login} component={LoginScreen} />
      <Stack.Screen name={screen.authenticated} component={AuthenticatedScreen} />
      <Stack.Screen name={screen.switchScreens} component={SwitchLoginSignin} />
    </Stack.Navigator>
  );
};

export default AppStack;
