import React, { useEffect, useState, useRef, useCallback } from "react";
// NativeBase
import { NativeBaseProvider } from "native-base";
// React navigation
import { NavigationContainer } from "@react-navigation/native";

// Stacks
import AppStack from "./src/navigation/AppStack";
import { LogBox, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
//Redux

LogBox.ignoreLogs(["AsyncStorage has been extracted"]);
LogBox.ignoreLogs(["Calling getExpoPushTokenAsync without specifying a projectId is deprecated and will no longer be supported in SDK 49+"]);
//AsyncStorage.clear();

import { startNotifications } from './src/utils/actions/notificationActions'

export default function App() {

  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    startNotifications(notificationListener, responseListener);
  }, [])
  

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <NativeBaseProvider>
            <AppStack />
          </NativeBaseProvider>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
