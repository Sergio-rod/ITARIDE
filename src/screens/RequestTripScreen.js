import React, { useEffect, useState } from 'react';
import { FormControl, VStack, Box, HStack, Image, Center } from 'native-base';
import SliderMap from '../components/SliderMap';
import SwitchButton from '../components/SwitchButtonMap';
import MapImage from '../../assets/ImageMap.png';
import { TouchableOpacity } from 'react-native';
import screen from '../utils/screenNames';
import { StyleSheet } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import Map from '../components/Map';

const RequestTripScreen = ({ navigation }) => {
  const [largeRadius, setLargeRadius] = useState(40); // Initial value for large radius

  useEffect(() => {
    let orientationSubscription;

    const setScreenOrientation = async () => {
      await ScreenOrientation.unlockAsync();
      orientationSubscription = ScreenOrientation.addOrientationChangeListener(handleOrientationChange);
    };

    setScreenOrientation();

    return () => {
      if (orientationSubscription) {
        ScreenOrientation.removeOrientationChangeListener(orientationSubscription);
      }
      ScreenOrientation.unlockAsync();
    };
  }, []);

  const handleOrientationChange = ({ orientationInfo }) => {
    if (orientationInfo && orientationInfo.orientationLock) {
      const { orientationLock } = orientationInfo;

      if (orientationLock === ScreenOrientation.OrientationLock.UNKNOWN) {
        // El dispositivo está en modo automático, permitir orientación en cualquier dirección
        ScreenOrientation.unlockAsync();
      } else {
        // El dispositivo tiene una orientación fija, bloquear la orientación correspondiente
        ScreenOrientation.lockAsync(orientationLock);
      }
    }
  };

  function onPressMapImage() {
    navigation.navigate(screen.driver);
  }

  const handleLargeRadiusChange = (value) => {
    setLargeRadius(value);
  };

  return (
    <Center alignSelf={'center'} flex={1} width={'85%'}>
      <VStack space={1} flex={1} alignItems={'center'} width={'80%'}>
        <FormControl.Label>In range of</FormControl.Label>
        <SliderMap value={largeRadius} onValueChange={handleLargeRadiusChange} />

        <HStack>
          <Box alignSelf={'left'}>
            <FormControl.Label>Show my location</FormControl.Label>
            <SwitchButton />
          </Box>
          <Box alignSelf={'right'}>
            <FormControl.Label>Need gas</FormControl.Label>
            <SwitchButton />
          </Box>
        </HStack>

        <Box borderWidth={1} flex={2} width={'100%'}>
          <Map largeRadius={largeRadius} />
        </Box>
      </VStack>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default RequestTripScreen;
