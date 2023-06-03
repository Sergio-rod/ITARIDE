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
//AsyncStorage.clear();

export default function App() {
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
