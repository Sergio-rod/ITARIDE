import React from 'react';
import { FormControl, VStack, Box, HStack, Image, Center } from "native-base";
import SliderMap from '../components/SliderMap';
import SwitchButton from '../components/SwitchButtonMap';
import MapImage from '../../assets/ImageMap.png';
import { Pressable, TouchableOpacity } from 'react-native';
import screen from '../utils/screenNames';
import { StyleSheet } from 'react-native';

const RequestRideScreen = ({ navigation }) => {

  function onPressMapImage() {
    navigation.navigate(screen.passenger)
  }


  return (
    <Center
      alignSelf={'center'}
      flex={1} width={'85%'}
      borderWidth={1}
    >
      <VStack space={1} flex={1} alignItems={'center'} width={'80%'}>
        <FormControl.Label>In range of</FormControl.Label>
        <SliderMap />


        <HStack>
          <Box alignSelf={"left"}>
            <FormControl.Label>Show my location</FormControl.Label>
            <SwitchButton />
          </Box>
          <Box alignSelf={"right"}>
            <FormControl.Label>Need gas</FormControl.Label>
            <SwitchButton />
          </Box>
        </HStack>

        <Box flex={2} borderWidth={1} width={'100%'}>
          <TouchableOpacity style={styles.button} onPress={onPressMapImage} flex={1} >
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


export default RequestRideScreen;
