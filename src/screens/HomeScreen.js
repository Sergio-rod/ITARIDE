import React from 'react';
import { VStack, Text, Box, Avatar, HStack, Heading, Button, Image, Center, View } from "native-base";
import styles from "../utils/styles";
import Ganzo from '../../assets/Ganzo.png';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screen from '../utils/screenNames';
import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
 
  return (
    <Center> 
      <VStack space={2}>
        <Center marginBottom={'5'}>
          <Heading style={styles.headings}>
            Hola, Ganzo
          </Heading>
        </Center>

        <Center
          borderColor={'red'}
          borderRadius={'full'}
          overflow={'hidden'}
        >
          <Avatar size={'2xl'}>
            <Image
              borderRadius={100}
              source={Ganzo}
              alt={'Avatar'}
              resizeMode={'cover'}
              style={{ width: '100%', height: '100%' }}
            />
          </Avatar>
        </Center>

        <Box flex={1} flexDirection={'row'}  borderColor={'red'} borderRadius={10} p={5}>
          <VStack spacing={2}>

            <HStack justifyContent={'center'} mt={5}>

              <Box  borderColor={'red'} borderRadius={10} mr={2}>
                <Button onPress={() => navigation.navigate(screen.ride)}>
                  Quiero un viaje
                </Button>
              </Box>

              <Box borderColor={'red'} borderRadius={10} ml={2}>
                <Button onPress={() => navigation.navigate(screen.trip)}>
                  Quiero un acompañante
                </Button>
              </Box>

            </HStack>

          </VStack>
        </Box>

      </VStack>

  
    </Center>
  );
};

export default HomeScreen;
