import React, { useEffect } from 'react';
import { FormControl, VStack, Box, HStack, Image, Center } from 'native-base';
import SliderMap from '../components/SliderMap';
import SwitchButton from '../components/SwitchButtonMap';
import MapImage from '../../assets/ImageMap.png';
import { TouchableOpacity } from 'react-native';
import screen from '../utils/screenNames';
import { StyleSheet } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';


const RequestTripScreen = ({ navigation }) => {
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

  return (
    <Center alignSelf={'center'} flex={1} width={'85%'}>
      <VStack space={1} flex={1} alignItems={'center'} width={'80%'}>
        <FormControl.Label>In range of</FormControl.Label>
        <SliderMap />

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
          <TouchableOpacity style={styles.button} onPress={onPressMapImage} flex={1}>
            <Image
              width={'100%'}
              height={'100%'}
              source={MapImage}
              resizeMode="cover"
              flex={1}
              alt={'Map Image'}
            />
          </TouchableOpacity>
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
