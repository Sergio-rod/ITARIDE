import React, { useState } from 'react';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { TouchableOpacity, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SwitchLoginSignin = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {isSignUp ? <SignUpScreen /> : <LoginScreen />}
        <TouchableOpacity onPress={() => setIsSignUp(prevState => !prevState)}>
          <Text>Switch to {isSignUp ? 'Log in' : 'Sign up'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SwitchLoginSignin;
