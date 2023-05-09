import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RequestRideScreen from '../screens/RequestRideScreen';
import RequestTripScreen from '../screens/RequestTripScreen';
import screen from '../utils/screenNames';


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

    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
