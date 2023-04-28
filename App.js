// NativeBase
import { NativeBaseProvider } from "native-base";

// React navigation
import { NavigationContainer } from '@react-navigation/native';

// Stacks
import AppStack from './src/navigation/AppStack';

export default function App() {
  return (
    <NavigationContainer>
        <NativeBaseProvider>
          <AppStack />
        </NativeBaseProvider>
    </NavigationContainer>
  );
}
