import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RequestRideScreen from '../screens/RequestRideScreen';
import RequestTripScreen from '../screens/RequestTripScreen';
import screen from '../utils/screenNames';
import PassengerScreen from '../screens/PassengerScreen';
import DriverScreen from '../screens/DriverScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
       name={screen.home}
       component={HomeScreen}
       options={{ headerLeft: null }} />

      <HomeStack.Screen name={screen.ride} component={RequestRideScreen} />
      <HomeStack.Screen name={screen.trip} component={RequestTripScreen} />
      <HomeStack.Screen name={screen.passenger} component={PassengerScreen} />
      <HomeStack.Screen name={screen.driver} component={DriverScreen} />


    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
