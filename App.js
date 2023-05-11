// NativeBase
import { NativeBaseProvider } from "native-base";
// React navigation
import { NavigationContainer } from '@react-navigation/native';

// Stacks
import AppStack from './src/navigation/AppStack';
import { SafeAreaView } from "react-native";
//tests

import PassengerScreen from "./src/screens/PassengerScreen";
import DriverScreen from "./src/screens/DriverScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
        <NativeBaseProvider>
<DriverScreen></DriverScreen>
          {/* <AppStack /> */}
        </NativeBaseProvider>
    </NavigationContainer>
    </SafeAreaView>
  );
}
