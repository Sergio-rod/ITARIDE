// NativeBase
import { NativeBaseProvider } from "native-base";
// React navigation
import { NavigationContainer } from '@react-navigation/native';

// Stacks
import AppStack from './src/navigation/AppStack';
import { LogBox, SafeAreaView } from "react-native";
//tests


LogBox.ignoreLogs(['AsyncStorage has been extracted'])

import RequestRideScreen
 from "./src/screens/RequestRideScreen";
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
        <NativeBaseProvider>
          <AppStack />
        </NativeBaseProvider>
    </NavigationContainer>
    </SafeAreaView>
  );
}
